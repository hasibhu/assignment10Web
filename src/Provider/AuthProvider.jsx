
import { createContext, useEffect, useState } from "react";
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../src/firebase/firebase.config'

export const AuthContext = createContext(null);
const auth = getAuth(app);

//social auth providers
const googleProvider = new GoogleAuthProvider(); //required for google pop-up login
const gitHubProvider = new GithubAuthProvider(); //required for github pop-up login

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

    //Google login

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //GitHub log in
    const githubLogin = () => {
        return signInWithPopup(auth, gitHubProvider)
    }

    // logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log("Inner subscribe 4", currentUser)
            // console.log(user)
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
        googleLogin,
        githubLogin,
        logOut,
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;




