import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
 export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user,setUser] = useState('') 
 const Provider = new GoogleAuthProvider()
 const ProviderGitHub = new GithubAuthProvider()
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
        setIsLoading(false)
     
    }).catch((error) => {
     console.log(error);
    });
   
  } 
   const LogInWithGithub = () =>{
       return signInWithPopup(auth, ProviderGitHub)
       .then((result) => {
        const login = result.user
        setIsLoading(false)
        console.log(login);
    }).catch((error) => {
     console.log(error);
    });
    }
    const LogOut = () => {
        return signOut(auth)
        .then(()=>{})
        .catch(error=>{console.log(error);})
    }
   useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(userInfo)=>{
        setUser(userInfo)
        setIsLoading(false)
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
    LoginWithGoogle,
    LogInWithGithub ,
    LogOut,
    isLoading
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
