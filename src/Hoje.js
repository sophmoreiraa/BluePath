import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Hoje() {
    const CaixaText = ({ titulo, textoAdicional, isCircle }) => {
        const boxStyle = isCircle ? [css.box1, css.circle] : css.box1;

        return (
            <View style={boxStyle}>
                <Text style={[css.textoAdicional, { color: 'white', textAlign: 'center' }]}>{textoAdicional}</Text>
                {titulo && (
                    <View style={css.tituloContainer}>
                        <View style={css.numeroContainer}>
                            <Text style={[css.textTitulo, { color: 'white', fontSize: 160, textAlign: 'center', lineHeight: 180, marginTop: -50 }]}>{titulo}</Text>
                            <Text style={[css.textoAdicional, { color: 'white', fontSize: 15, textAlign: 'center' }]}>dias</Text>
                        </View>
                    </View>
                )}
            </View>
        );
    };

    const CaixaText2 = ({ textoAdicional }) => {
        return (
            <View style={css.box1}>
                <Text style={[css.textoAdicional, { color: 'white', textAlign: 'center' }]}>{textoAdicional}</Text>
            </View>
        );
    };

    return (
        <View style={css.container}>
            <CaixaText textoAdicional={"Você está sóbrio(a) há"} titulo={"2"} isCircle />
            <CaixaText2 textoAdicional={"Você atingirá seu próximo marco em 8 dias! #10diassobrio Continue firme!"} />
        </View>
    );
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFE2F5'
    },

    box1: {
        width: '90%',
        height: 90,
        backgroundColor: '#F2358D',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 60,
        borderRadius: 10,
    },

    circle: {
        borderRadius: 90000,
        width: '75%',
        height: 310,
        backgroundColor: '#94318E',
        alignItems: 'center',
        marginTop: 40,
    },

    tituloContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    numeroContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    textTitulo: {
        color: 'white',
    },

    textoAdicional: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
});











