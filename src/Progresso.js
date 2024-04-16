import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserContext } from "./Context/UserContext";
import * as Network from 'expo-network';

export default function Progresso() {
    const { usuario } = useContext(UserContext);

    useEffect(() => {
        const getNetworkState = async () => {
            const networkState = await Network.getNetworkStateAsync();
            console.log(networkState);
        };
        getNetworkState();
    }, []);

    const CaixaText = ({ titulo }) => {
        return (
            <View style={css.box1}>
                <Text style={css.text2}>{titulo}</Text>
            </View>
        );
    }

    const CaixaTempo = ({ titulo }) => {
        return (
            <View style={css.box}>
                <Text style={css.text}>{titulo}</Text>
            </View>
        );
    };

    return (
        <View style={css.container}>
            <Text style={css.textuser}>Bem-Vindo(a) de volta {usuario} </Text>
            <CaixaTempo titulo="Dias" />
            <CaixaTempo titulo="Horas" />
            <CaixaTempo titulo="Minutos" />
            <CaixaTempo titulo="Segundos" />

            <Text style={css.text1}>Renovações Diárias</Text>

            <CaixaText titulo="Você está dando o seu melhor, e é mais que suficiente!" />
            <CaixaText titulo="Não andeis ansiosos pela vossa vida. - Mateus 6:25" />
            <CaixaText titulo="O que somos é consequência do que pensamos. - Buda Siddharta" />
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFE2F5',
        paddingTop: 40
    },

    box: {
        width: '80%',
        height: 45,
        backgroundColor: '#F2388F',
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 10,
    },

    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 8
    },

    text1: {
        fontSize: 16,
        color: '#8C2053',
        fontWeight: 'bold',
        padding: 15
    },

    text2: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    box1: {
        width: '90%',
        height: 80,
        backgroundColor: '#FFB2C4',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
    },

    textuser: {
        fontSize: 15,
        color: '#8C2053',
        fontWeight: 'bold'
    }
});
