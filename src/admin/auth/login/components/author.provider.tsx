import React, {useState} from 'react';
import {useContext, createContext} from "react";
import {useNavigate} from "react-router-dom";
import {IMetadata} from "../index";
import {ILogin} from "./loginForm";

let AuthContext: React.Context<unknown>;
// @ts-ignore
AuthContext = createContext();

function AuthorProvider({children}: { children: React.ReactNode }) {
    const [user, setUser] = useState({} as IMetadata);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();
    const loginAction = (loginRequest: ILogin) => {
        try {
            fetch("http://localhost:8000/user/sign-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginRequest),
            }).then(response => response.json()).then(data => {
                if (data.data) {
                    setUser({...data.data});
                    setUser(data.token);
                    localStorage.setItem("site", data.token);
                    navigate("/admin/category");
                    return;
                } else {
                    navigate("/admin/login");
                    return;
                }
            });
        } catch (err) {
            console.error(err);
        }
    }

    const logOut = () => {
        setUser({} as IMetadata);
        setToken("");
        localStorage.removeItem("site");
        navigate("/admin/login");
    };

    return (
        <AuthContext.Provider value={{token, user, loginAction, logOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthorProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};