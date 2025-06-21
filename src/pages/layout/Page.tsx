import { ReactElement, useEffect, useState } from 'react'
import { useAuth } from '../../hooks/AuthProvider'
import { Navigate } from "react-router-dom";

interface IProps {
    children: ReactElement,
    requiresAuth: boolean,
    noAuthAllowed: boolean
}

const Page = ({children, requiresAuth, noAuthAllowed}:IProps) => {
    const { getUser } = useAuth();
    
    const [authState, setAuthState] = useState("LOADING");

    const getCurrentUser = async () => {
        const user = await getUser().catch(()=>{
            if(requiresAuth){
                return setAuthState("UNAUTHORIZED");
            }
            return setAuthState("AUTHORIZED")
        });

        if(user){
            if(noAuthAllowed){
                return setAuthState("NOAUTHALLOWED")
            }

            return setAuthState("AUTHORIZED")
        }
    }

    useEffect(()=>{
        getCurrentUser()
    },[])

    switch(authState){
        case "LOADING":
            return <h1>Loading...</h1>
        case "AUTHORIZED":
            return children
        case "UNAUTHORIZED":
            return <Navigate to="/login" />
        case "NOAUTHALLOWED":
            return <Navigate to="/dashboard" />
    }
}

export default Page