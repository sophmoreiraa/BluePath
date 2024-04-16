import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import { UserContext } from './Context/UserContext';

import Login from './Login';
import Ajuda from './Ajuda';
import Comunidade from './Comunidade';
import Hoje from './Hoje';
import Progresso from './Progresso';
import Apoio from './Apoio';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  const { logado } = useContext(UserContext);

  if (logado === false) {
    return <Login />;
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#E255A3"
      />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#E255A3', // Cor de fundo da barra de navegação
            },
            tabBarActiveTintColor: '#8C1440', // Cor do texto da aba ativa
            tabBarInactiveTintColor: '#fff', // Cor do texto da aba inativa
          }}>
          <Tab.Screen name="Progresso" component={Progresso} />
          <Tab.Screen name="Hoje" component={Hoje} />
          <Tab.Screen name="Comunidade" component={Comunidade} />
          <Tab.Screen name="Apoio" component={Apoio} />
          <Tab.Screen name="Ajuda" component={Ajuda} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
