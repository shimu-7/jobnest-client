import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () =>{
        setDarkMode(!darkMode);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password, username, photo) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, username, photo);
    }

    const logIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            setUser(currentUser);
            console.log('current User',currentUser);
            const loggedUser = {email: userEmail};
            setLoading(false);
            // if user exists then issue a token
            if(currentUser){
                axios.post('http://localhost:5000/jwt', loggedUser,{withCredentials: true})
                .then(res=>{
                    console.log('token response', res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logout',loggedUser, {withCredentials: true})
                .then(res=>{
                    console.log(res.data)
                })

            }
        });
        return () => unSubscribe();
    }, []);



    const authInfo = {
        user, loading, googleSignIn, logOut, createUser, logIn, toggleDarkMode, darkMode
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}


export default AuthProvider;