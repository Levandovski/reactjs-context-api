import React, { useState, useEffect } from "react";
import { NameProps, UserProps } from "./interface";


export const AuthContext: any = React.createContext({});

export const AuthProvider = (props: any) => {

    const [user, setUser] = useState<NameProps>({
        name: "Default Name"
    })

    useEffect(() => {
        const userStorage = localStorage.getItem("user");
        if (userStorage) {       
            setUser(JSON.parse(userStorage));
        }else{
            setUser({
                name: ''
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext<UserProps>(AuthContext);