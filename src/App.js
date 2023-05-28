import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import './static/css/App.css'
import { AuthContext } from "./context";
import React, { useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setIsAuth(true);
            setUser(JSON.parse(user));
        }
        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            user,
            setUser,
            isLoading
        }}>
            <BrowserRouter>
                <Header/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
