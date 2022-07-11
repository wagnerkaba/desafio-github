
import React, { useContext, createContext, useState } from "react";
import { buscarUsuario } from "../servicos/apiGitHub";

const authContext = createContext();

function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

function useAuth() {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = (user) => {
        buscarUsuario(user);
        setUser(user);


    };

    const signout = callbackFunction => {
        setUser(null);
        callbackFunction();
    };

    return {
        user,
        setUser,
        signin,
        signout
    };
}

export { useAuth, ProvideAuth };