import React, { useState, useEffect, useContext } from 'react';
import { Feather as Icon } from '@expo/vector-icons'
import { View, Text, Image, KeyboardAvoidingView, Platform, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect  from 'react-native-picker-select';
import { ThemeContext } from 'styled-components';
import axios from 'axios';

import { useTheme } from '../../utils/theme';

import {  
  Container,
  Header,
  Main,
  Title,
  Description,
  Footer,
  Button,
  ButtonIcon,
  ButtonText
} from './styles';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const Home: React.FC = () => {
  const { title, colors } = useContext(ThemeContext);
  const { toggleTheme } = useTheme();
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const navigation = useNavigation();
  
  const pickerSelectStyles = {
    inputAndroid: {
      height: 50,
      backgroundColor: colors.select,
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
    inputIOS: {
      height: 50,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  }

  useEffect(() => {
    if (selectedUf === '0') return;

    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
      )
      .then(response => {
        const cityNames = response.data.map(city => city.nome);

        setCities(cityNames);
      });
  }, [selectedUf]);

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      )
      .then(response => {
        const ufInitials = response.data.map(uf => uf.sigla);

        setUfs(ufInitials);
      });
  }, []);

  function handleNavigationToPoints(){
    navigation.navigate('Points', {
      uf: selectedUf,
      city: selectedCity,
    });
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container 
        imageStyle={{
          width: 274,
          height: 368,
          tintColor: title === 'light' ? 'green' : '#f5f5f5',
          opacity: 0.2,
        }}
        source={require('../../assets/home-background.png')} 
      >
        <Main>
          <Header>
            { title === 'light' ? (
              <Image source={require('../../assets/logo.png')} />
            ) : (
              <Image source={require('../../assets/logoDracule.png')} />
            )}
            <Switch 
              trackColor={{ false: colors.secundary, true: colors.primary}}
              onValueChange={toggleTheme}
            />
          </Header>
          <View>
            <Title>Seu market place de coleta de resíduos</Title>
            <Description>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Description>
          </View>
        </Main>

        <Footer>
          <RNPickerSelect
              placeholder={{ color: colors.text ,label: 'selecione uma uf'}}
              value={selectedUf}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
              onValueChange={(selectedUf) => setSelectedUf(selectedUf)}
              items={ufs.map(uf => ({
                label: uf,
                value: uf
              }))}
          />
          <RNPickerSelect
              placeholder={{ color: colors.text ,label: 'selecione uma cidade'}}
              value={selectedCity}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
              onValueChange={(selectedCity) => setSelectedCity(selectedCity)}
              items={cities.map(city => ({
                label: city,
                value: city
              }))}
          />

          <Button onPress={handleNavigationToPoints}>
            <ButtonIcon>
              <Text >
                { title === 'light' ? (
                  <Icon name="arrow-right" color="#FFF" size={24} />
                ) : (
                  <Icon name="arrow-right" color="#8BE9FD" size={24} />
                )}
              </Text>
            </ButtonIcon>
            <ButtonText>Entrar</ButtonText>
          </Button>
        </Footer>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Home;