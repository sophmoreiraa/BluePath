import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function Comunidade() {
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Emails],
                });

                if (data.length > 0) {
                    const contact = data[0];
                    console.log(contact);
                }
            }
        })();
    }, []);

    const ChatBox = ({ user, text }) => {
        return (
            <View>
                <Text style={styles.username}>{user}</Text>
                <View style={styles.chatBox}>
                    <Text style={styles.message}>{text}</Text>
                </View>
            </View>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ChatBox user="Miguel Costa" text="O impacto positivo que este aplicativo teve na minha vida é inestimável. Ele me ajudou a reconhecer meus padrões de pensamento negativos e a desenvolver estratégias para lidar com eles. Estou muito grato por ter encontrado esta ajuda tão preciosa." />
            <ChatBox user="Maria Silva" text="Este aplicativo é um verdadeiro salva-vidas para mim. Antes de usá-lo, estava perdida e desesperada. Agora, sinto-me mais esperançosa e confiante em relação ao meu futuro. Obrigado por criar algo tão incrível!" />
            <ChatBox user="Juliana Almeida" text="Estou maravilhada com a qualidade e a sensibilidade deste aplicativo. Cada recurso é pensado com tanto cuidado e atenção aos detalhes. Sinto-me genuinamente cuidada e apoiada por esta incrível ferramenta." />
            <ChatBox user="Mariana Albuquerque" text="Estou impressionada com a eficácia deste aplicativo! Ele oferece uma variedade de recursos que têm sido fundamentais para o meu bem-estar mental. Recomendo a todos que lutam contra a depressão e a ansiedade." />
            <ChatBox user="Bruna Teles" text="Não sei como expressar em palavras o quanto este aplicativo é importante para mim. Ele me acompanha todos os dias, me dando suporte e orientação quando mais preciso. Sinto-me mais forte e capaz de enfrentar meus medos e ansiedades." />
            <ChatBox user="Gael Cordeiro" text="Este aplicativo mudou minha vida! Desde que comecei a usá-lo, sinto que tenho um amigo sempre presente, me ajudando nos momentos difíceis. Agradeço do fundo do meu coração por esta ferramenta incrível!" />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#FFE2F5'
    },
    chatBox: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginBottom: 10,
        padding: 10,
    },
    username: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#8C1440',
        paddingLeft: 10
    },
    message: {
        fontSize: 14,
    },
});
