import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function DetalhesProfissional() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profissionais" component={Profissionais} />
        <Stack.Screen name="DetalhesProfissional" component={DetalhesProfissional} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const DetalhesProfissional = ({ route }) => {
    const { nomeProfissional } = route.params;

    const profissionais = {
        'Dr. João da Silva': {
            nome: 'Dr. João da Silva',
            telefone: '(14) 99999-9999',
            cargo: 'Psicólogo',
            cidade: 'Bauru',
            tempoAtuacao: '10 anos',
            registro: '123456',
            horarioDia: '8h às 18h',
            horarioSemana: 'Segunda a Sexta',
        },
        'Dra. Maria Oliveira': {
            nome: 'Dra. Maria Oliveira',
            telefone: '(14) 88888-8888',
            cargo: 'Psiquiatra',
            cidade: 'Bauru',
            tempoAtuacao: '8 anos',
            registro: '654321',
            horarioDia: '9h às 17h',
            horarioSemana: 'Segunda a Sexta',
        },
        'Dr. Pedro Santos': {
            nome: 'Dr. Pedro Santos',
            telefone: '(14) 77777-7777',
            cargo: 'Terapeuta',
            cidade: 'Bauru',
            tempoAtuacao: '5 anos',
            registro: '789123',
            horarioDia: '10h às 18h',
            horarioSemana: 'Terça a Sábado',
        },
        'Dra. Ana Rodrigues': {
            nome: 'Dra. Ana Rodrigues',
            telefone: '(14) 66666-6666',
            cargo: 'Psicóloga',
            cidade: 'Bauru',
            tempoAtuacao: '7 anos',
            registro: '987654',
            horarioDia: '8h às 17h',
            horarioSemana: 'Segunda a Sexta',
        },
        'Dr. Lucas Almeida': {
            nome: 'Dr. Lucas Almeida',
            telefone: '(14) 55555-5555',
            cargo: 'Psiquiatra',
            cidade: 'Bauru',
            tempoAtuacao: '6 anos',
            registro: '456789',
            horarioDia: '9h às 18h',
            horarioSemana: 'Segunda a Sexta',
        },
        'Dra. Juliana Costa': {
            nome: 'Dra. Juliana Costa',
            telefone: '(14) 44444-4444',
            cargo: 'Terapeuta',
            cidade: 'Bauru',
            tempoAtuacao: '4 anos',
            registro: '789456',
            horarioDia: '10h às 19h',
            horarioSemana: 'Terça a Sábado',
        },
        'Dr. Rafael Lima': {
            nome: 'Dr. Rafael Lima',
            telefone: '(14) 33333-3333',
            cargo: 'Psicólogo',
            cidade: 'Bauru',
            tempoAtuacao: '9 anos',
            registro: '654987',
            horarioDia: '8h às 17h',
            horarioSemana: 'Segunda a Sexta',
        },
        'Dra. Fernanda Souza': {
            nome: 'Dra. Fernanda Souza',
            telefone: '(14) 22222-2222',
            cargo: 'Psiquiatra',
            cidade: 'Bauru',
            tempoAtuacao: '7 anos',
            registro: '789654',
            horarioDia: '9h às 18h',
            horarioSemana: 'Segunda a Sexta',
        },
        'Dr. Gustavo Santos': {
            nome: 'Dr. Gustavo Santos',
            telefone: '(14) 11111-1111',
            cargo: 'Terapeuta',
            cidade: 'Bauru',
            tempoAtuacao: '5 anos',
            registro: '456123',
            horarioDia: '10h às 19h',
            horarioSemana: 'Terça a Sábado',
        },
        'Dra. Carolina Oliveira': {
            nome: 'Dra. Carolina Oliveira',
            telefone: '(14) 00000-0000',
            cargo: 'Psicóloga',
            cidade: 'Bauru',
            tempoAtuacao: '6 anos',
            registro: '321654',
            horarioDia: '8h às 18h',
            horarioSemana: 'Segunda a Sexta',
        },
    };

    const profissional = profissionais[nomeProfissional];

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{profissional.nome}</Text>
            <Text>Telefone: {profissional.telefone}</Text>
            <Text>Cargo: {profissional.cargo}</Text>
            <Text>Cidade: {profissional.cidade}</Text>
            <Text>Tempo de Atuação: {profissional.tempoAtuacao}</Text>
            <Text>Registro: {profissional.registro}</Text>
            <Text>Horário Disponível no Dia: {profissional.horarioDia}</Text>
            <Text>Horário Disponível na Semana: {profissional.horarioSemana}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F0D1E6',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default DetalhesProfissional;

