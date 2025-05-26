import { useContext, createContext, useState } from "react";
import supabase from "../data/supabase";
import { AuthError, Provider, Session, User, WeakPassword } from "@supabase/supabase-js";

interface AuthContextType {
  user: User | null
  getUser: ()=>Promise<User | null>;
  oAuthLoginAction: (provider:Provider) => void;
  credentialsLoginAction: (credentials:LoginData) => Promise<CredentialResponseData | AuthError>;
  credentialsRegisterAction: (credentials:RegisterData) => Promise<CredentialResponseData | AuthError>;
  logOut: () => void;
}

interface LoginData {
    email: string,
    password: string
}

interface CredentialResponseData {
    user: User | null;
    session: Session | null;
    weakPassword?: WeakPassword | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }:any) => {
  const [user, setUser] = useState<User | null>(null);

  const getUser = async () => {
    const { data } = await supabase.auth.getSession();

    if(!data || !data.session){
      setUser(null);
      return Promise.reject(null);
    }

    setUser(data.session.user)
    return Promise.resolve(data.session.user);
  }

  const oAuthLoginAction = async (provider:Provider) => {
      await supabase.auth.signInWithOAuth({
        provider: provider,
      });
  };

  async function credentialsRegisterAction(credentials:RegisterData) {
    const { data, error } = await supabase.auth.signUp({
      email: credentials.email,
      password: credentials.password
    });

    if(error){
      return Promise.reject(error);
    }

    return Promise.resolve(data);
  }

  const credentialsLoginAction = async (credentials:LoginData) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    });  

    if(error){
      return Promise.reject(error);
    }

    return Promise.resolve(data);
};

  const logOut = () => {

  };

  return (
    <AuthContext.Provider value={{ user, getUser, oAuthLoginAction, credentialsLoginAction, credentialsRegisterAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};