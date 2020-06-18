import styled from 'styled-components/native';
import MapView ,{ Marker } from 'react-native-maps';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding: 0 32px;
  padding-top: ${Constants.statusBarHeight + 20}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Ubuntu_700Bold';
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
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
  background-color: ${({ theme }) => theme.colors.primary};
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
  color: ${({ theme }) => theme.title === 'light' ? theme.colors.card : theme.colors.text};
  font-size: 13px;
  line-height: 23px;
`;

export const ItemsContainer = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Item = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.title === 'light' ? theme.colors.card : theme.colors.button};
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.background};
  height: 120px;
  width: 120px;
  margin-top: 16px;
  margin-bottom: 32px;
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
  border-color: ${({ theme }) => theme.title === 'light' ? theme.colors.primary : theme.colors.title};
  border-width: 2px;
`;

export const ItemTitle = styled.Text`
  font-family: 'Roboto_400Regular';
  text-align: center;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.title};
`;
