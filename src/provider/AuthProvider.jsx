/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true)

    const createUser = (email, password) => {
        setLoadingUser(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const loginUser = (email, password) => {
        setLoadingUser(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    const updateProfileUser = (name, photo) => {
        setLoadingUser(true)
        return updateProfile(auth.currentUser, {
            displayName: name , photoURL : photo 
        })
    };
    const userLogout = () => {
        setLoadingUser(true);
        return signOut(auth);
    };
    const loginWithGoogle = () => {
        setLoadingUser(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async currentUser => {
            setLoadingUser(false)
            if (currentUser?.email) {
                setUser(currentUser)
                //generate toke
                const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,
                  { email: currentUser?.email }, { withCredentials: true })
                console.log(data)
              } else {
                setUser(currentUser)
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logout`,
                 { withCredentials: true })
                console.log(data)
              }
              setLoadingUser(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user, loadingUser,
        createUser,
        loginUser,
        updateProfileUser,
        userLogout,
        loginWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;