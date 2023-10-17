import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase.config";
export const AuthContext = createContext()
 const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [isLoading, setIsLoading] = useState(true)
    const signUpWithEmail = (email, password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInWithEmail =(email, password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }




    const authInfo ={
        isLoading,
        signUpWithEmail,
        signInWithEmail,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;