
import React, { useContext, createContext, useState } from "react";

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



    return {
        user,
        setUser
    };
}

export { useAuth, ProvideAuth };