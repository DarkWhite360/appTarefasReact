import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ListarTarefas from "./componentes/ListarTarefas";
import Home from "./componentes/Home";
import ListarTarefa from './componentes/ListarTarefa';
import EditarTarefa from './componentes/EditarTarefa';
import Responsaveis from './componentes/Responsaveis';
import Perfil from './componentes/Perfil';
import CadastrarTarefa from './componentes/CadastrarTarefa';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator initialRouteName = 'Home' 
      screenOptions={{tabBarStyle:{height: 80, paddingBottom: 10, paddingTop:10},
      headerShown: false}}
    >
      <Tab.Screen name ="Home" component={Home} 
        options={{
          tabBarIcon:({color,size})=>(<Ionicons name="home" size={size} color={color}/>),
        }}
      />
      <Tab.Screen name ="Tarefas" component={ListarTarefas} 
        options={{
          tabBarIcon:({color,size})=>(<Ionicons name="checkbox" size={size} color={color}/>),
        }}
      />
      <Tab.Screen name ="Responsáveis" component={Responsaveis} 
        options={{
          tabBarIcon:({color,size})=>(<Ionicons name="people" size={size} color={color}/>),
        }}
      />
      <Tab.Screen name ="Perfil" component={Perfil} 
        options={{
          tabBarIcon:({color,size})=>(<Ionicons name="person" size={size} color={color}/>),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
        
          <Stack.Screen name='Main' component={MyTabs}/>

          <Stack.Screen name='ListarTarefa' component={ListarTarefa} options={{
            title:'Detalhes da tarefa',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
          <Stack.Screen name='EditarTarefa' component={EditarTarefa} options={{
            title:'Atualizando da tarefa',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
          <Stack.Screen name='CadastrarTarefa' component={CadastrarTarefa} options={{
            title:'Cadastro de tarefa',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

