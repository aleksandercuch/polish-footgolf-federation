// CORE
import { createContext, useContext, useEffect, useState } from "react";

// API
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, UserCredential } from 'firebase/auth';
import auth from "../../firebase/config/clientApp";

interface CreateContextProps {
    createUser: (email: string, password: string) => Promise<UserCredential>;
}

const UserContext = createContext<CreateContextProps | null>(null);

export const AuthContextProvider = ({children}: any) => {
    const [user, setUser] = useState({});
    
    const createUser = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            currentUser && setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <UserContext.Provider value={{ createUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}