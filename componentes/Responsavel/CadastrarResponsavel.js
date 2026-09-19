import { useState } from "react";
import { Alert, Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput} from "react-native";
import api from "../../service/api";

function CadastrarResponsavel({navigation}){

    const[nome, setNome] = useState();
    const[email, setEmail] = useState();
    const[telefone, setTelefone] = useState();
    const[senha, setSenha] = useState();
    const[foto, setFoto] = useState();
    const[cargo, setCargo] = useState();
    const[status, Status] = useState();
    const[departamento, setDepartamento] = useState();


    return (

        <View style={estilo.container}>
            <View style={estilo.topo}>
                <Text style={estilo.textoTopo}>Cadastro de Responsável</Text>
                <TouchableOpacity style={estilo.botaoCadastrar} 
                    onPress={()=> navigation.navigate('CadastrarResponsavel')}>
                    <Text style={estilo.textoBotao}>+ Novo Responsável</Text>
                </TouchableOpacity>
            </View>
            
            <ScrollView>
                <View style={estilo.itemLista}>

                    <Text style={estilo.responsavel}>Nome:</Text>
                    <TextInput
                        value={nome}
                        onChangeText={setNome}
                        style={estilo.input}
                    />
                    <Text style={estilo.responsavel}>E-mail:</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={estilo.input}
                    />
                    <Text style={estilo.responsavel}>Telefone</Text>
                    <TextInput
                        value={telefone}
                        onChangeText={setTelefone}
                        style={estilo.input}
                    />
                    <Text style={estilo.responsavel}>Senha</Text>
                    <TextInput
                        value={senha}
                        onChangeText={setSenha}
                        style={estilo.input}
                    />
                    <Text style={estilo.responsavel}>Foto</Text>
                    <TextInput
                        value={foto}
                        onChangeText={setFoto}
                        style={estilo.input}
                    />
                    <Text style={estilo.responsavel}>Cargo</Text>
                    <TextInput
                        value={cargo}
                        onChangeText={setCargo}
                        style={estilo.input}
                    />
                    <Text style={estilo.responsavel}>Departamento</Text>
                    <TextInput
                        value={departamento}
                        onChangeText={setDepartamento}
                        style={estilo.input}
                    />
                </View>
            </ScrollView>

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

export default CadastrarResponsavel;