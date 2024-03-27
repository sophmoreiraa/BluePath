import { View, Text } from "react-native"
import { useContext } from "react";
import {UserContext} from "./Context/UserContext";

export default function Progresso ()
{
    const { usuario } = useContext( UserContext );

    return(
        
        <View>
             <Text>Bom dia!: {usuario} </Text>
        </View>
    )
    
}