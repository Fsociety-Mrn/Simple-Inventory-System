import { createContext, useEffect, useState } from "react";
import { useAuth } from "../AuthenticationCRUD/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const currentUser = useAuth()
 // const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {

//     const a = () => {
//         setCurrentUser(useAuth)
//     }
//     // app.getAuth().onAuthStateChanged((user) => {
//     //   setCurrentUser(user)
//     // });
//   }, []);

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
