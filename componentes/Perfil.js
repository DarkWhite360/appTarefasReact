import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import api from "../service/api.js";

function Perfil({ navigation }) {

    const [responsavel, setResponsavel] = useState();

    return (
        <View style={estilo.container}>

            <View style={estilo.topo}>
                <Text style={estilo.titulo}>Perfil do Responsável</Text>
                
                <View style={estilo.fotoPerfil}>
                    <Ionicons name='person-outline' size={50} color='#2563eb'/>
                </View>

                <View style={estilo.nomeContainer}>
                    <Text style={estilo.nome}>Antonio Branco</Text>
                </View>
            </View>

            <View style={estilo.informacoes}>

                <View style={estilo.item}>
                    <View style={estilo.icone}>
                        <Ionicons name='mail-outline' size={24} />
                    </View>

                    <Text style={estilo.valor}>antonio@gmail.com</Text>
                </View>

                <View style={estilo.item}>
                    <View style={estilo.icone}>
                        <Ionicons name='call-outline' size={24} />
                    </View>
                    
                    <Text style={estilo.valor}>(44) 99999-9999</Text>
                </View>

                <View style={estilo.item}>
                    <View style={estilo.icone}>
                        <Ionicons name='business-outline' size={24} />
                    </View>
                    
                    <Text style={estilo.valor}>TI</Text>
                </View>

                <View style={estilo.item}>
                    <View style={estilo.icone}>
                        <Ionicons name='id-card-outline' size={24} />
                    </View>
                    
                    <Text style={estilo.valor}>Desenvolvedor</Text>
                </View>
            </View>

            <View style={estilo.acoes}>
                <TouchableOpacity style={estilo.botaoEditar} onPress={()=> navigation.navigate('EditarResponsavel', {item})}>
                    <Text style={estilo.textoBotao}>Editar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f4f7',
    },
    
    topo: {
        width: '100%',
        height: 180,
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
    
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom:15,
    },
    fotoPerfil:{
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },

    nomeContainer:{
        alignitems: 'center',
        justifyContent: 'center',
    },

    nome:{
        color:'#ffffff',
        fontSize:18,
        fontWeight: '600',
        marginTop: 5,
    },

    informacoes:{
        width: '100%',
        paddingHorizontal: 12,
        paddingVertical: 15,
    },

    item:{
        width:'100%',
        minHeight: 60,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems:'center',
        paddingHorizontal: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 15,
        
    },

    icone:{
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },

    valor:{
        fontSize: 15,
        color: '#333333',
        marginLeft: 15,
    },
    
    acoes: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
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
        width: 150,
        height: 40,
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
        width: 150,
        marginBottom: 10,
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

export default Perfil;