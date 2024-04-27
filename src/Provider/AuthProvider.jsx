
import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../src/firebase/firebase.config'




export const AuthContext = createContext(null);
const auth = getAuth(app);




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

   

    //create user with email
    const createUser = async (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
            
    };
//log in user with email
    const signInWithEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Inner subscribe 4", currentUser)
            console.log(user)
            setLoading(false)
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, [user]);

    const authInfo = {
        user,
        loading,
        createUser,
        signInWithEmailPassword,

        
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;




