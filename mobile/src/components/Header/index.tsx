import React from 'react';
import { TouchableOpacity, Switch } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, Content } from './styles';

const Header:React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Content>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34CB79" />
        </TouchableOpacity>
        <Switch
          trackColor={{ false: "#44478B", true: "#34CB79"}}
          onValueChange={() => {}}
          value={false}
        />
      </Content>
    </Container>
  );
}

export default Header;