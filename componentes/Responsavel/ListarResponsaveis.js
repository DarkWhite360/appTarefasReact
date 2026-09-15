import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useState, useEffect } from "react";
import api from "../../service/api.js";

export default function ListarResponsaveis({ navigation }) {

    const [responsaveis, setResponsaveis] = useState([]);

    return(
        <View style={estilo.container}>
            <View style={estilo.topo}>
                <View style={estilo.topo}>
                    <Text style={estilo.textoTopo}>Lista de Responsaveis</Text>
                    <TouchableOpacity style={estilo.botaoCadastrar}
                        onPress ={()=> navigation.navigate('CadastrarResponsavel')}>
                            <Text style={estilo.textoBotao}>+ Novo Responsável</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={estilo.listaResponsavel}>
                    {
                        //onde ser implemetada a listagem de responsaveis após ser feita a conexão com a api
                    }
                </ScrollView>

            </View>

        </View>
    );

}



const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f4f7',
    },

    todo: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },

    topo: {
        width: '100%',
        height: 80,
        backgroundColor: '#2563eb',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,
    },

    textoTopo: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
    },

    listaResponsavel: {
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 12,
        alignItems: 'center',
    },

    itemLista: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 12,

        borderWidth: 1,
        borderColor: '#e0e0e0',

        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222222',
        marginBottom: 8,
    },

    responsavel: {
        fontSize: 14,
        color: '#555555',
        marginBottom: 5,
    },

    status: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333333',
        marginBottom: 10,
    },

    acoes: {
        width: '100%',
        minHeight: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        gap: 8,
    },

    botaoVerMais: {
        flex: 1,
        height: 38,
        backgroundColor: '#2563eb',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    botaoEditar: {
        flex: 1,
        height: 38,
        backgroundColor: '#16a34a',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    botaoExcluir: {
        flex: 1,
        height: 38,
        backgroundColor: '#dc2626',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoCadastrar: {
        flex: 1,
        height: 38,
        width: 130,
        marginBottom:10,
        backgroundColor: '#190d75',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
    },
});