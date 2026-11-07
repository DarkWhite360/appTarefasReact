import { useState } from "react";
import { Alert, Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import api from "../../service/api";

function Login({ navigation }) {
    const [email, setEmail] = useState('antonio@gmail.com');
    const [senha, setSenha] = useState('@12345');

    const entrar = async () => {
        if (!email || !senha) {
            Alert.alert("Atenção", "Preencha todos os campos para continuar.");
            return;
        }

        try {
            const response = await api.post('/responsaveis/autenticar', {
                email,
                senha
            });
            Alert.alert("Sucesso", "Login realizado com sucesso!");
            console.log("ok")
            navigation.replace('Main');
        } catch (error) {
            console.log(error);
            Alert.alert("Erro", error.response?.data?.mensagem || "E-mail ou senha inválidos.");
        }

    };

    return (

        <ScrollView style={estilo.conteainer} contentContainerStyle={estilo.conteudoScroll}>

            <View style={estilo.topo}>
                <Text style={estilo.textoTopo}>Acessar o Sistema</Text>
            </View>

            <View style={estilo.cartaoDetalhes}>
                <View style={estilo.blocoInfo}>
                    <Text style={estilo.label}>E-mail</Text>
                    <TextInput
                        style={estilo.input}
                        placeholder="Seu email"
                        placeholderTextColor="#9ca3af"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={estilo.blocoInfo}>
                    <Text style={estilo.label}>Senha *</Text>
                    <TextInput
                        style={estilo.input}
                        placeholder="Sua senha"
                        placeholderTextColor="#9ca3af"
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={setSenha}
                    />
                </View>

                <TouchableOpacity style={estilo.botaoSalvar} onPress={entrar}>
                    <Text style={estilo.textoBotaoSalvar}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>


    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f4f7',
    },
    conteudoScroll: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingBottom: 30,
        alignItems: 'center',
        paddingTop: 10,
    },
    topo: {
        width: '100%',
        backgroundColor: '#2563eb',
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        marginBottom: 15,
    },
    textoTopo: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    cartaoDetalhes: {
        width: '92%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    blocoInfo: {
        marginBottom: 14,
    },
    label: {
        fontSize: 13,
        fontWeight: '600',
        color: '#4b5563',
        marginBottom: 5,
        textTransform: 'uppercase',
    },
    input: {
        backgroundColor: '#f9fafb',
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 15,
        color: '#1f2937',
    },
    botaoSalvar: {
        backgroundColor: '#16a34a',
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 10,
        elevation: 2,
    },
    textoBotaoSalvar: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Login;