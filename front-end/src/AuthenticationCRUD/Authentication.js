import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../AuthenticationCRUD/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const currentUser = useAuth()
  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
