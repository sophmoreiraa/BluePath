import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(0);

function UserProvider({ children }) {
    const [usuario, setUsuario] = useState(null);
    const [logado, setLogado] = useState(false);

    async function Login(email, senha) {

        if (email == "sophiahmoreirav@gmail.com" && senha == "28102006") {
            await AsyncStorage.setItem("usuario", "Sophia Helena");
            setLogado(true);
        }
    }

    async function infoUsuario() {
        const usuario = await AsyncStorage.getItem("usuario");
        if (usuario) {
            setLogado(true);
            setUsuario(usuario);
        }
    }

    useEffect(() => {
        infoUsuario();
    }, []);

    return (
        <UserContext.Provider value={{ usuario: usuario, logado: logado, Login, infoUsuario }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider; 