import styled from 'styled-components/native';

import Constants from 'expo-constants';

export const Container = styled.View`
  padding: 0 32px;
  padding-top: ${Constants.statusBarHeight + 10}px;
  background-color: rgba(255, 255, 255, 0.0);
  width: 100%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.text};
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;