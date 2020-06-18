import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 32px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  margin-top: -20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 27px;
  font-family: 'Ubuntu_700Bold';
  max-width: 260px;
  margin-top: 24px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  margin-top: 10px;
  font-family: 'Roboto_400Regular';
  max-width: 260px;
  line-height: 24px;
`;

export const Footer = styled.View`
  margin-top: 20px;
`;

export const Button = styled(RectButton)`
  background-color: ${({ theme }) => theme.title === 'light'  ? theme.colors.primary : theme.colors.button};
  height: 60px;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonIcon = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.title === 'light' ? theme.colors.select : theme.colors.text };
  font-family: Roboto_500Medium;
  font-size: 16px;
`;
