import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/AuthProvider'
import { Navigate, Outlet } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';

const AuthPage = () => {
    const { getUser } = useAuth();
    
    const [authState, setAuthState] = useState("LOADING");

    const getCurrentUser = async () => {
        const user = await getUser().catch(()=>{
            return setAuthState("UNAUTHORIZED");
        });

        if(user){
            return setAuthState("AUTHORIZED")
        }
    }

    useEffect(()=>{
        getCurrentUser()
    },[])

    switch(authState){
        case "LOADING":
            return <h1>Loading...</h1>
        case "UNAUTHORIZED":
            return <Navigate to="/login" />
        case "AUTHORIZED":
            return (
            <>
                <Navbar />
                <Outlet />
            </>
            )
    }
}

export default AuthPage