import styled from 'styled-components/native';
import MapView ,{ Marker } from 'react-native-maps';


export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Ubuntu_700Bold';
  margin-top: 20px;
`;

export const Description = styled.Text`
  color: #6C6C80;
  font-size: 16px;
  margin-top: 4px;
  font-family: 'Roboto_400Regular';
`;

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 16px;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapMarker = styled(Marker)`
  width: 90px;
  height: 80px;
`;

export const MapMarkerContainer = styled.View`
  width: 100px;
  height: 70px;
  background-color: #34CB79;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
`;

export const MapMarkerImage = styled.Image`
  width: 100%;
  height: 45px;
  /* resize: cover; */
`;

export const MapMarkerTitle = styled.Text`
  flex: 1;
  font-family: 'Roboto_400Regular';
  color: #FFF;
  font-size: 13px;
  line-height: 23px;
`;

export const ItemsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const Item = styled.TouchableOpacity`
  background-color: #FFF;
  border-width: 2px;
  border-color: #EEE;
  height: 120px;
  width: 120px;
  border-radius: 8px;
  padding: 0 16px;
  padding-top: 20px;
  padding-bottom: 16px;
  margin-right: 8px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const SelectedItem = styled.View`
  border-color: #34CB79;
  border-width: 2px;
`;

export const ItemTitle = styled.Text`
  font-family: 'Roboto_400Regular';
  text-align: center;
  font-size: 13px;
`;
