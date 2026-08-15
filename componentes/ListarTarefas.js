import {View, Text, StyleSheet} from 'react-native';
import tarefas from "../mook/BaseTarefas";

export default function ListarTarefas(){
    return(
        <View style={estilo.container}>
            <View style={estilo.topo}>
                <Text style={estilo.textoTopo}>Gerenciador de Tarefas</Text>
            </View>
            <View style={estilo.listaTarefas}>
                {
                    tarefas.map((item)=>(
                        <View key={item.id} style={estilo.itemLista}>
                            <Text style={estilo.titulo}> {item.tarefa}</Text>
                            <Text style={estilo.descricao}>{item.descricao}</Text>
                            <Text style={estilo.responsavel}>Responsavel: {item.responsavel.nome}</Text>
                            <View>
                                <Text style={estilo.data}>Criado em: {item.data_criacao}</Text>
                                <Text style={estilo.data}>Criado em: {item.data_atualizacao}</Text>
                                <Text style={estilo.status}>Status: {item.status}</Text>
                            </View>
                            
                        </View>
                    ))
                }

            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#e2e2e2',
        justifyContent: 'top',
        alignItems: 'center',
    },
    topo:{},
    topoTexto:{},
    listaTarefas:{
        width: '90%',
        backgroundColor: '#ebaaaa',
        alignItems:'center'
    },
    itemLista:{
        marginTop: 10,
        borderWidth:1,
        borderColor:'black',
        width: '95%',
        paddingLeft: 10,
        paddingBottom: 10,
    },
    titulo:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop:5,

    },
    descricao:{},
    responsavel:{},
    data:{},
    status:{},
})