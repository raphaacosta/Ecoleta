import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SvgUri } from 'react-native-svg';
import * as Location from 'expo-location';
import api from '../../services/api';

import { 
  Container,
  Title,
  Description,
  MapContainer,
  Map,
  MapMarkerContainer,
  MapMarker,
  MapMarkerImage,
  MapMarkerTitle,
  ItemsContainer,
  Item,
  ItemTitle
 } from './styles';

interface Item {
  id: number;
  title: string;
  image_url: string
}

interface Point {
  id: number;
  image: string;
  image_url: string;
  name: string;
  latitude: number;
  longitude: number;
}

interface Params {
  uf: string;
  city: string;
  items: {
    id: number;
  }[];
}

const Points: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const navigation = useNavigation();
  const route = useRoute();
  const { city, uf } = route.params as Params;

  const [initialPosition, setInitialPosition] = useState<number[]>([0,0]);

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Ooops...', 'Precisamos de sua permissão para obter a localização');
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInitialPosition([latitude, longitude]);
    }
    loadPosition();
  }, []);

  useEffect(() => {
    api.get('points', {
      params: {
        city,
        uf,
        items: selectedItems
      }
    }).then(response => {
      setPoints(response.data);
    });
  }, [selectedItems]);

  function handleSelectedItem(id: number) {
    const alreadySelected = selectedItems.findIndex(item => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([ ...selectedItems, id]);
    }
  }

  function handlenavigateBack() {
    navigation.goBack();
  }

  function handlenavigateToDetail(id: number) {
    navigation.navigate('Detail', { point_id: id });
  }

  return (
    <>
      <Container>
        <TouchableOpacity onPress={handlenavigateBack}>
          <Icon name="arrow-left" size={20} color="#34CB79"/>
        </TouchableOpacity>

        <Title>Bem-Vindo</Title>
        <Description>Encontre no mapa um ponto de coleta.</Description>

        <MapContainer>
          { initialPosition[0] !== 0 && (
              <Map 
              loadingEnabled={initialPosition[0] === 0}
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014
              }}
            >
              {points.map(point => (
                <MapMarker 
                  key={String(point.id)}
                  onPress={() => handlenavigateToDetail(point.id)}
                  coordinate={{
                    latitude: point.latitude,
                    longitude: point.longitude
                  }}
                >
                  <MapMarkerContainer>
                    <MapMarkerImage source={{ uri: point.image_url }} />
                    <MapMarkerTitle>{point.name}</MapMarkerTitle>
                  </MapMarkerContainer>
                </MapMarker>
              ))}
            </Map>
          ) }
        </MapContainer>
      </Container>
      <ItemsContainer>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}  
        >
          {items.map(item => (
            <Item 
              key={String(item.id)} 
              style={[ 
                selectedItems.includes(item.id) && {
                  borderColor: '#34CB79',
                  borderWidth: 2,
                }
              ]} 
              onPress={() => handleSelectedItem(item.id)}
              activeOpacity={0.6}  
            >
              <SvgUri width={42} height={42} uri={item.image_url}/>
            <ItemTitle>{item.title}</ItemTitle>
            </Item>
          ))}
        </ScrollView>
      </ItemsContainer>
    </>
  );
};

export default Points;