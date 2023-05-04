import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
 export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user,setUser] = useState('') 
 const Provider = new GoogleAuthProvider()
  const auth = getAuth(app);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const newSingIn = (email,password) => {
      return signInWithEmailAndPassword(auth,email,password)
  }
  const LoginWithGoogle = ()=>{
     return signInWithPopup(auth,Provider)
     .then((result) => {
        const login = result.user
        console.log(login);
    }).catch((error) => {
     console.log(error);
    });
   
  }
   useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(userInfo)=>{
        setUser(userInfo)
        console.log(userInfo);
       
        return ()=>{
          return unsubscribe
        }
       })
    },[])

  const AuthInfo = {
    user,
    createUser,
    newSingIn,
    LoginWithGoogle
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
