import React, { useState } from "react";
import { View, Text } from "react-native";

function EditarTarefa ({route}){
    const itemRota = route.params;

    const [item, setItem] = useState(itemRota.item);
    console.log(item)
    return(
        <View>
            <Text>Editando a tarefa</Text>
            <Text>Titulo: {item.tarefa}</Text>
        </View>
    )
}

export default EditarTarefa;