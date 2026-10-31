import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
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

            <ScrollView style={styles.scroll} contentContainerStyle={styles.conteudo}>
                <View style={styles.dashboard}>
                    <Text style={styles.titulo}>Dashboard</Text>
                    <View style={styles.metricas}>
                        <Text style={styles.titulo}>Métricas de Tarefas</Text>
                        <View style={styles.cardContainer}>
                            <View style={[styles.card, styles.cardTarefas]}>
                                <Text style={[styles.label, styles.textoAtribuido]}>Atribuidas:</Text>
                                <Text style={[styles.resultado, styles.textoAtribuido]}>{tarefas.length}</Text>
                            </View>


                            <View style={[styles.card, styles.cardConcluido]}>
                                <Text style={[styles.label, styles.textoConcluido]}>Concluídas:</Text>
                                <Text style={[styles.resultado, styles.textoConcluido]}>{filtroConcluido.length}</Text>
                            </View>
                            <View style={[styles.card, styles.cardPendente]}>
                                <Text style={[styles.label, styles.textoPendente]}>Pendentes:</Text>
                                <Text style={[styles.resultado, styles.textoPendente]}>{filtroPendente.length}</Text>
                            </View>
                            <View style={[styles.card, styles.cardEmAndamento]}>
                                <Text style={[styles.label, styles.textoAndamento]}>Andamento:</Text>
                                <Text style={[styles.resultado, styles.textoAndamento]}>{filtroEmAndamento.length}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[styles.secaoTarefas, styles.secaoAndamento]}>
                    <Text style={styles.tituloSecao}>Tarefas em Andamento</Text>
                    {
                        filtroEmAndamento.map((item) => {
                            return (
                                <View key={item.id} style={styles.itemTarefa}>
                                    <Text style={styles.tituloTarefa}>{item.titulo}</Text>
                                </View>
                            )
                        })
                    }
                </View>

                <View style={[styles.secaoTarefas, styles.secaoConcluida]}>
                    <Text style={styles.tituloSecao}>Tarefas Concluídas</Text>
                    {
                        filtroConcluido.map((item) => {
                            return (
                                <View key={item.id} style={styles.itemTarefa}>
                                    <Text style={styles.tituloTarefa}>{item.titulo}</Text>
                                </View>
                            )
                        })
                    }
                </View>

                <View style={[styles.secaoTarefas, styles.secaoPendente]}>
                    <Text style={styles.tituloSecao}>Tarefas Pendentes</Text>
                    {
                        filtroPendente.map((item) => {
                            return (
                                <View key={item.id} style={styles.itemTarefa}>
                                    <Text style={styles.tituloTarefa}>{item.titulo}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Home;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#2563eb',
    },
    scroll: {
        flex: 1,
    },
    conteudo: {
        flexGrow: 1,
        backgroundColor: '#f2f4f7',
        padding: 16,
        alignItems: 'center',
    },
    dashboard: {
        width: '100%',
        alignItems: 'center',
    },
    topo: {
        width: '100%',
        backgroundColor: '#2563eb',
        paddingVertical: 16,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
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
    container: {
        flex: 1,
        backgroundColor: '#f2f4f7',
        padding: 16,
        alignItems: 'center',
    },
    metricas: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
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
        marginBottom: 12,
    },

    cardContainer: {
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 6,
    },
    card: {
        width: '48%',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 8,
        borderWidth: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTarefas: {
        backgroundColor: '#f1ee3d33',
        borderColor: '#99971af9',
    },
    cardEmAndamento: {
        backgroundColor: '#3d5ef133',
        borderColor: '#1a3899f9',
    },
    cardConcluido: {
        backgroundColor: '#54f70833',
        borderColor: '#5ba71ef9',
    },
    cardPendente: {
        backgroundColor: '#f5070733',
        borderColor: '#991a1af9',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: 5,
    },
    resultado: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    textoAtribuido: {
        color: '#99971af9'
    },
    textoConcluido: {
        color: '#5ba71ef9'
    },
    textoPendente: {
        color: '#991a1af9'
    },
    textoAndamento: {
        color: '#1a3899f9'
    },
    secaoTarefas: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginTop: 12,
        marginBottom: 5,
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
    tituloSecao: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#222222',
        marginBottom: 12,
    },
    itemTarefa: {
        width: '100%',
        backgroundColor: '#f8fafc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },

    tituloTarefa: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333333',
    },
    secaoAndamento: {
        borderLeftWidth: 4,
        borderLeftColor: '#2563eb',
    },

    secaoConcluida: {
        borderLeftWidth: 4,
        borderLeftColor: '#16a34a',
    },

    secaoPendente: {
        borderLeftWidth: 4,
        borderLeftColor: '#dc2626',
    },
});
