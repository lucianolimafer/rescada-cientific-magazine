import { createContext, ReactNode } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword, logout, registerWithEmailAndPassword } from "../services/firebase";

interface ICredentials {
  email: string;
  password: string;
}

type AuthContextData = {
  signIn(credentials: ICredentials): Promise<void>;
  register(credentials: ICredentials): Promise<void>;
  logOut(): Promise<void>;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, loading, error] = useAuthState(auth);
  const isAuthenticated = !!user;

  async function signIn({ email, password }: ICredentials) {
    logInWithEmailAndPassword(email, password)
  }

  async function register({ email, password }: ICredentials) {
    registerWithEmailAndPassword('teste', email, password)
  }

  async function logOut() {
    logout()
  }

  return (
    <AuthContext.Provider value={{ signIn, register, logOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
