import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from './Context/UserContext';

export default function Login() {

    const [email, setEmail] = useState("");
    const [erro, setErro] = useState(false);
    const [senha, setSenha] = useState("");
    const {logado, Login} = useContext( UserContext );
    
    function realizaLogin()
    {
        Login( email, senha );
    }

    return (
        <View style={css.container}>
            <TextInput
                placeholder='Usuário'
                onChangeText={(digitado) => setEmail(digitado)}
                style={css.input}
            />
            <TextInput
                placeholder='Senha'
                onChangeText={(digitado) => setSenha(digitado)}
                style={css.input}
            />
            <TouchableOpacity style={css.btn} onPress={realizaLogin}>
                <Text style={css.btnText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: "80%",
        borderWidth: 1,
        height: 45,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20
    },
    btn: {
        width: "80%",
        height: 45,
        backgroundColor: "pink",
        borderRadius: 5
    },
    btnText: {
        color: "white",
        lineHeight: 45,
        fontWeight: "bold",
        textAlign: "center"
    }
});