import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from "react-native";
import api from "../../service/api";

function EditarResponsavel({route}){

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
                <Text style={estilo.textoTopo}>Editar Responsável</Text>
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

                    <TouchableOpacity style={estilo.botaoCadastrar}>
                        <Text style={estilo.textoBotao}>Atualizar</Text>
                     </TouchableOpacity>

                </View>
            </ScrollView>

        </View>

    );

}

export default EditarResponsavel;