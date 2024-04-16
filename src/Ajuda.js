import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profissionais = () => {
    const navigation = useNavigation();

    const profissionais = [
        { nome: 'Dr. João da Silva', telefone: '(14) 99999-9999', cargo: 'Psicólogo', cidade: 'Bauru' },
        { nome: 'Dra. Maria Oliveira', telefone: '(14) 88888-8888', cargo: 'Psiquiatra', cidade: 'Bauru' },
        { nome: 'Dr. Pedro Santos', telefone: '(14) 77777-7777', cargo: 'Terapeuta', cidade: 'Bauru' },
        { nome: 'Dra. Ana Rodrigues', telefone: '(14) 66666-6666', cargo: 'Psicóloga', cidade: 'Bauru' },
        { nome: 'Dr. Lucas Almeida', telefone: '(14) 55555-5555', cargo: 'Psiquiatra', cidade: 'Bauru' },
        { nome: 'Dra. Juliana Costa', telefone: '(14) 44444-4444', cargo: 'Terapeuta', cidade: 'Bauru' },
        { nome: 'Dr. Rafael Lima', telefone: '(14) 33333-3333', cargo: 'Psicólogo', cidade: 'Bauru' },
        { nome: 'Dra. Fernanda Souza', telefone: '(14) 22222-2222', cargo: 'Psiquiatra', cidade: 'Bauru' },
        { nome: 'Dr. Gustavo Santos', telefone: '(14) 11111-1111', cargo: 'Terapeuta', cidade: 'Bauru' },
        { nome: 'Dra. Carolina Oliveira', telefone: '(14) 00000-0000', cargo: 'Psicóloga', cidade: 'Bauru' }
    ];

    const handleVerMais = (nome) => {
        navigation.navigate('DetalhesProfissional', { nomeProfissional: nome });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Profissionais mais próximos de você</Text>
            <ScrollView contentContainerStyle={styles.listaProfissionais}>
                {profissionais.map((profissional, index) => (
                    <View key={index} style={styles.caixa}>
                        <View style={styles.informacoes}>
                            <Text style={styles.texto}>{`Nome: ${profissional.nome}`}</Text>
                            <Text style={styles.texto}>{`Telefone: ${profissional.telefone}`}</Text>
                            <Text style={styles.texto}>{`Cargo: ${profissional.cargo}`}</Text>
                            <Text style={styles.texto}>{`Cidade: ${profissional.cidade}`}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => handleVerMais(profissional.nome)}>
                            <Text style={styles.textoBotao}>Ver Mais</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE2F5',
        padding: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    listaProfissionais: {
        flexGrow: 1,
    },
    caixa: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        padding: 10,
        marginBottom: 10,
    },
    informacoes: {
        flex: 1,
    },
    texto: {
        fontSize: 16,
        marginBottom: 5,
    },
    botao: {
        backgroundColor: '#F2388F',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    textoBotao: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Profissionais;


