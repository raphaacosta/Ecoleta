import React, { useEffect, useState, useContext } from 'react';
import { Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';
import api from '../../services/api';
import * as MailComposer from 'expo-mail-composer';

import { 
  Container,
  BackButton,
  PointImage,
  PointName,
  PointItems,
  Address,
  AddressTitle,
  AddressContent,
  Footer,
  Button,
  ButtonTitle
 } from './styles';

interface Params {
  point_id: number;
}

interface Data {
  point: {
    image: string;
    image_url: string;
    name: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  };
  items: {
    title: string;
  }[];
}

const Detail = () => {
  const [data, setData] = useState<Data>({} as Data);
  const { title, colors } = useContext(ThemeContext);

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    api.get(`points/${routeParams.point_id}`).then(response => {
      setData(response.data);
    });
  },[]);

  function handleNavigateBack() {
    navigation.goBack();
  }
 
  function handleComposeMail() {
    MailComposer.composeAsync({
      subject: 'Interesse na coleta de resíduos',
      recipients: [data.point.email],
    });
  }

  function handleWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${data.point.whatsapp}&text=Tenho interesse sobre coleta de resíduos`);
  }

  if(!data.point) {
    return null;
  }

  return (
    <>
      <Container>
        <BackButton onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34CB79"/>
        </BackButton>

        <PointImage source={{ uri: data.point.image_url }}/>

        <PointName>{data.point.name}</PointName>
        <PointItems>{data.items.map(item => item.title).join(', ')}</PointItems>

        <Address>
          <AddressTitle>Endereço</AddressTitle>
          <AddressContent>{data.point.city}, {data.point.uf}</AddressContent>
        </Address>
      </Container>
      <Footer>
        <Button onPress={handleWhatsapp} >
          <FontAwesome name="whatsapp" size={20} color="#FFF"/>
          <ButtonTitle>Whatsapp</ButtonTitle>
        </Button>

        <Button onPress={handleComposeMail} >
          <Icon name="mail" size={20} color="#FFF"/>
          <ButtonTitle>E-mail</ButtonTitle>
        </Button>
      </Footer>
    </>
  );
};

export default Detail;