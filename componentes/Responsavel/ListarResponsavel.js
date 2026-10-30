import { useState } from "react";
import {Text, View, StyleSheet} from "react-native";

function ListarResponsavel({route}){

    const ItemRota = route.params;

    const[item, setItem] = useState(ItemRota.item);

    return(
        <View>
            <Text style={estilo.responsavel}>Nome: {item.nome}</Text>
            <Text style={estilo.responsavel}>E-mail: {item.email}</Text>
            <Text style={estilo.responsavel}>Telefone: {item.telefone}</Text>
            <Text style={estilo.responsavel}>Cargo: {item.cargo}</Text>
            <Text style={estilo.responsavel}>Status: {item.status}</Text>
            <Text style={estilo.responsavel}>Departamento: {item.departamento}</Text>
        </View>
    )
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
        width: 150,
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

export default ListarResponsavel;