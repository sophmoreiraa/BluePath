import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

import Login from "./Login";
import Ajuda from "./Ajuda";
import Apoio from "./Apoio";
import Comunidade from "./Comunidade";
import Hoje from "./Hoje";
import Progresso from "./Progresso";
import { UserContext } from './Context/UserContext';

export default function Rotas() {

    const { logado } = useContext(UserContext);

    if (logado == false) {
        return (<Login />)
    }

    return (

        <NavigationContainer>
            <Tab.Navigator initialRouteName="Ajuda">
                <Tab.Screen name="Ajuda" component={Ajuda} />
                <Tab.Screen name="Apoio" component={Apoio} />
                <Tab.Screen name="Comunidade" component={Comunidade} />
                <Tab.Screen name="Hoje" component={Hoje} />
                <Tab.Screen name="Progresso" component={Progresso} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}