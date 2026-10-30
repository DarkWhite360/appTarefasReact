import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import ListarTarefas from "../Tarefa/ListarTarefas"
import api from "../../service/api";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

function Home() {

    const [tarefas, setTarefas] = useState([]);
    const [filtroEmAndamento, setFiltroEmAndamento] = useState([])
    const [filtroConcluido, setFiltroConcluido] = useState([])
    const [filtroPendente, setFiltroPendente] = useState([])

    const buscarTarefa = async () => {
        try {
            const resposta = await api.get("/tarefas");
            setTarefas(resposta.data);
            const resp = resposta.data;

            const emAndamento = resp.filter((item) => item.status === "EM_ANDAMENTO");
            const concluido = resp.filter((item) => item.status === "CONCLUIDO");
            const pendente = resp.filter((item) => item.status === "PENDENTE");

            setFiltroEmAndamento(emAndamento);
            setFiltroConcluido(concluido);
            setFiltroPendente(pendente);

        } catch (error) {
            console.log("Erro ao buscar serviço: " + error.response.data.mensagem);
        } finally {
            console.log("Busca de tarefas finalziada!!");
        }
    }

    useEffect(() => {
        buscarTarefa()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topo}>
                <Text style={styles.textoTopo}>Início</Text>
            </View>

            <View style={styles.container}>
                <Text>Dashboard</Text>
                <View style={styles.metricas}>
                    <Text style={styles.titulo}>Métricas de Tarefas</Text>
                    <View style={styles.cardContainer}>
                        <View style={[styles.card, styles.cardTarefas]}>
                            <Text style={[styles.label, styles.textoAtribuido]}>Atribuidas:</Text>
                            <Text style={[styles.resultado, styles.textoAtribuido]}>{tarefas.length}</Text>
                        </View>


                        <View style={[styles.card, styles.cardConcluido]}>
                            <Text style={[styles.label, styles.textoAtribuido]}>Concluídas:</Text>
                            <Text>{filtroConcluido.length}</Text>
                        </View>
                        <View style={[styles.card, styles.cardPendente]}>
                            <Text style={[styles.label, styles.textoAtribuido]}>Pendentes:</Text>
                            <Text>{filtroPendente.length}</Text>
                        </View>
                        <View style={[styles.card, styles.cardEmAndamento]}>
                            <Text style={[styles.label, styles.textoAtribuido]}>Andamento:</Text>
                            <Text>{filtroEmAndamento.length}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <Text>Filtro em Andamento</Text>
                {
                    filtroEmAndamento.map((item) => {
                        return (
                            <View key={item.id}>
                                <Text>{item.titulo}</Text>
                            </View>
                        )
                    })
                }
            </View>

            <View>
                <Text>Filtro Concluida</Text>
                {
                    filtroConcluido.map((item) => {
                        return (
                            <View key={item.id}>
                                <Text>{item.titulo}</Text>
                            </View>
                        )
                    })
                }
            </View>

            <View>
                <Text>Filtro Pendente</Text>
                {
                    filtroPendente.map((item) => {
                        return (
                            <View key={item.id}>
                                <Text>{item.titulo}</Text>
                            </View>
                        )
                    })
                }
            </View>

        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#2563eb', // Cor do seu topo/header (pinta a barra de status)
    },
    topo: {
        width: '100%',
        backgroundColor: '#2563eb',
        paddingVertical: 16,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoTopo: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#f2f4f7', // Cor de fundo do corpo da tela
        padding: 16,
        alignItems: 'center',
    },
    metricas:{
        borderRadius: 7,
        paddingHorizontal: '10px',
        paddingVertical: '10px',
    },
    titulo:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: '10px'

    },
    cardContainer:{
        flexDirection:'row',
        width: '100%',
        gap: 6,
    },
    card:{
        width: '23%',
        borderRadius: 7,
        paddingHorizontal: '5px',
        paddingVertical: '5px',
        borderColor: '#333',
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 2
    },
    cardTarefas:{
        backgroundColor: '#f1ee3d33',
        borderColor: '#99971af9',
    },
    cardEmAndamento: {
        
    },
    cardConcluido: {

    },
    cardPendente:{

    },
    label:{
        fontWeight: 'bold',
        fontSize: 12
    },
    resultado:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    textoAtribuido:{
        color: '#99971af9'
    },
    textoConcluido:{

    },
    textoPendente:{

    },
    textoEmAndamento:{
        
    }

});
