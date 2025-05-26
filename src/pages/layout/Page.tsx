import { ReactElement, useEffect, useState } from 'react'
import { useAuth } from '../../hooks/AuthProvider'
import useRouter from '../../hooks/useRouter';

interface IProps {
    children: ReactElement,
    requiresAuth: boolean,
    noAuthAllowed: boolean
}

const Page = ({children, requiresAuth, noAuthAllowed}:IProps) => {
    const { getUser } = useAuth();
    const router = useRouter();
    
    const [authState, setAuthState] = useState("LOADING");

    const getCurrentUser = async () => {
        const user = await getUser().catch(()=>{
            if(requiresAuth){
                router.navigate("/login");
            }
            return setAuthState("AUTHORIZED")
        });

        if(user){
            if(noAuthAllowed){
                return router.navigate("/dashboard")
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
        case "FAILED":
            return <h1>Failed</h1>
    }
}

export default Page