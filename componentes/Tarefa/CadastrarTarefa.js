import { useState } from "react";
import { Alert, Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput} from "react-native";
import api from "../../service/api";

function CadastrarTarefa({navigation}) {

    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [responsavel, setResponsavel] = useState();

    const cadastrar = async ()=>{
        if(!titulo.trim() || !descricao.trim() || !responsavel.trim()){
            Alert.alert("Atenção", "Os campos são obrigatórios");
            console.log("Os campos são obrigatórios!");
            return;
        }

        try{
            await api.post("/tarefa", {titulo, descricao, responsavel});
            console.log("Sucesso!!");

            Alert.alert("Sucesso","Tarefa cadastrada com sucesso!!!", [
                {text: "OK", onPress:()=>navigation.GoBack()}
            ]);
        } catch(error){
            Alert.alert("Erro","Erro ao cadastrar a tarefa!!!");
            console.log("Erro ao cadastrar tarefa!!!", error.response.data.mensagem);
        }
    }

    return (

        <View style={estilo.container}>

            <View style={estilo.todo}>
                <View style={estilo.topo}>
                    <Text style={estilo.textoTopo}>Cadastro de Tarefas</Text>
                    <TouchableOpacity style={estilo.botaoCadastrar}
                        onPress={() => navigation.navigate('CadastrarTarefa')}>
                        <Text style={estilo.textoBotao}>+ Nova Tarefa</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={estilo.cadastrarTarefas}>
                <View style={estilo.itemLista}>

                    <Text style={estilo.titulo}>Titulo da Tarefa:</Text>
                    <TextInput
                        value={titulo}
                        onChangeText={setTitulo}
                        style={estilo.input}
                    />

                    <Text style={estilo.rotulo}>Descrição:</Text>
                    <TextInput
                        value={descricao}
                        onChangeText={setDescricao}
                        multiline = {true}
                        numberOfLines={4}
                        style={estilo.inputDescricao}
                    />

                    <Text style={estilo.rotulo}>Responsavel:</Text>
                    <TextInput
                        value={responsavel}
                        onChangeText={setResponsavel}
                        style={estilo.input}
                    />

                    <View style = {estilo.acao}>
                        <TouchableOpacity onPress={cadastrar} style={estilo.botaoSalvar}>
                            <Text style={estilo.textoBotao}>Salvar</Text>    
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </View >
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
    cadastrarTarefas: {
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
    acao: {
        width: '100%',
        minHeight: 45,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    botaoSalvar: {
        flex: 1,
        height: 60,
        width: 130,
        marginBottom:10,
        backgroundColor: '#025E37',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
    },
    rotulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222222',
        marginBottom: 8,
    },
    input: {
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 7,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 10,
    },
    inputDescricao: {
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 7,
        marginBottom: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 10,
    },

})


export default CadastrarTarefa;