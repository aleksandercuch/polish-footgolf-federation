"use client";
// CORE
import { createContext, useContext, useEffect, useState } from "react";

// API
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  UserCredential,
} from "firebase/auth";
import auth from "../../firebase/config/clientApp";

// CUSTOM HOOKS
import useModal from "@/hooks/useModal/useModal";

// COMPONENTS
import { LoginModal } from "@/components/auth/login-modal/login-modal";

interface CreateContextProps {
  createUser: (email: string, password: string) => Promise<UserCredential>;
  modal: boolean;
  handleModal: (content: any) => void;
  modalContent: string;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  user: {};
  logout: () => void;
}

const UserContext = createContext<CreateContextProps | null>(null);

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState({});
  let { modal, handleModal, modalContent } = useModal();

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setUser({});
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser && setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        createUser,
        modal,
        handleModal,
        modalContent,
        signIn,
        user,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
