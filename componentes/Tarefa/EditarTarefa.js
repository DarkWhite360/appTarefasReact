import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from "react-native";
import api from "../../service/api";

function EditarTarefa({ route }) {
    const id = route.params.item.id;

    const [tarefas, setTarefas] = useState([]);

    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [observacao, setObservacao] = useState();
    const [preco, setPreco] = useState();
    const [prioridade, setPrioridade] = useState();
    const [dataLimite, setDataLimite] = useState();
    const [status, setStatus] = useState();
    const [responsavel, setResponsavel] = useState();

    const buscarTarefa = async () => {
        try {
            const resposta = await api.get(`/tarefa/${id}`);
            const respTarefa = resposta.data.tarefa;

            setTarefas(respTarefa);
            console.log(respTarefa);
            setTitulo(respTarefa.titulo);
            setDescricao(respTarefa.descricao);
            setResponsavel(respTarefa.responsavel.nome);

        } catch (error) {
            console.log("Erro ao buscar serviço: " + error.response.data.erro);
        }

        //implmentar o finlay
    }

    useEffect(() => {
        buscarTarefa();
    }, []);

    const atualizar = async () => {
        console.log("Atualizar")
    }

    return (
        <View style={estilo.container}>

            <View style={estilo.todo}>
                <View style={estilo.topo}>
                    <Text style={estilo.textoTopo}>Editar Tarefa</Text>
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
                        multiline={true}
                        numberOfLines={4}
                        style={estilo.inputDescricao}
                    />

                    <Text style={estilo.rotulo}>Observação:</Text>
                    <TextInput
                        value={observacao}
                        onChangeText={setObservacao}
                        multiline={true}
                        numberOfLines={4}
                        style={estilo.inputDescricao}
                    />

                    <Text style={estilo.rotulo}>Preço:</Text>
                    <TextInput
                        value={preco}
                        onChangeText={setPreco}
                        style={estilo.input}
                    />

                    <Text style={estilo.rotulo}>Prioridade:</Text>
                    <Picker
                        selectedValue={prioridade}
                        onValueChange={(itemValue) => { console.log("Prioridade Selecioanda:", prioridade); setPrioridade(itemValue) }}
                        style={estilo.input}
                    >
                        <Picker.item label="ALTA" value="ALTA" />
                        <Picker.item label="MEDIA" value="MEDIA" />
                        <Picker.item label="BAIXA" value="BAIXA" />
                    </Picker>

                    <Text style={estilo.rotulo}>Data Limite:</Text>
                    <TextInput
                        value={dataLimite}
                        onChangeText={setDataLimite}
                        style={estilo.input}
                    />

                    <Text style={estilo.rotulo}>Status:</Text>
                    <Picker
                        selectedValue={status}
                        onValueChange={(itemValue) => { console.log("Status selecioando:", status); setStatus(itemValue) }}
                        style={estilo.input}
                    >
                        <Picker.Item label="PENDENTE" value="PENDENTE" />
                        <Picker.Item label="EM_ANDAMENTO" value="EM_ANDAMENTO" />
                        <Picker.Item label="CONCLUIDA" value="CONCLUIDA" />
                    </Picker>

                    <Text style={estilo.rotulo}>Responsavel:</Text>
                    <TextInput
                        value={responsavel}
                        onChangeText={setResponsavel}
                        style={estilo.input}
                    />

                    <View style={estilo.acao}>
                        <TouchableOpacity onPress={atualizar} style={estilo.botaoSalvar}>
                            <Text style={estilo.textoBotao}>Atualizar</Text>
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
        marginBottom: 10,
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

export default EditarTarefa;