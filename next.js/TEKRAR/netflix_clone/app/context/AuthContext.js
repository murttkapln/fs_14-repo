"use client"

import { createContext, useContext, useEffect, useState } from "react";
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { auth } from "../auth/firebase";








export const AuthContext = createContext()
//* With custom hook
export const useAuthContext = () => {
    return useContext(AuthContext)
}


const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false)

    useEffect(() => {
        userObserver()
    }, [])


    const createUser = async (email, password, displayName) => {
        try {
            //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
            let userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )

            //? kullanıcı profilini güncellemek için kullanılan firabase metodu
            await updateProfile(auth.currentUser, {
                displayName: displayName
            })
            toastSuccessNotify("Registered Successfully!")
            console.log(userCredential);

        } catch (err) {
            toastErrorNotify(err.message)

        }
    }
    //* https://console.firebase.google.com/
    //* => Authentication => sign-in-method => enable Email/password
    //! Email/password ile girişi enable yap

    const signIn = async (email, password) => {
        try {
            //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
            let userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            toastSuccessNotify("Logged in successfully!")
            console.log(userCredential);
        } catch (err) {
            toastErrorNotify(err.message)
        }
    }

    const logOut = () => {
        signOut(auth)
        toastSuccessNotify("Logged out successfully!")
    }


    const userObserver = () => {
        //? kullanıcının sign in olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                const { email, displayName, photoURL } = currentUser
                setCurrentUser({ email, displayName, photoURL })
                sessionStorage.setItem("user", JSON.stringify({ email, displayName, photoURL }))
            } else {
                // User is signed out
                setCurrentUser(false)
                sessionStorage.clear()
            }
        })
    }

    //* https://console.firebase.google.com/
    //* => Authentication => sign-in-method => enable Google
    //! Google ile girişi enable yap
    //* => Authentication => settings => Authorized domains => add domain
    //! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle

    const signUpProvider = () => {
        //? Google ile giriş yapılması için kullanılan firebase metodu
        const provider = new GoogleAuthProvider()
        //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
        signInWithPopup(aut, provider)
            .then((result) => {
                console.log(result);
                toastSuccessNotify("Logged in successfully!")
            })
            .catch((error) => {
                // Handle Errors here.
                console.log(error);
            })
    }

    const forgotPassword = (email) => {
        //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu

        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reser email sent!
                toastWarnNotify("Please check your email box!")
                // alert("Please check your email box!")
            })
            .catch((err) => {
                toastErrorNotify(err.message)
                // alert(err.message)
            })
    }

    const values = {
        currentUser,
        createUser,
        signIn,
        logOut,
        signUpProvider,
        forgotPassword
    }

    return <AuthContext.Provider value={values}></AuthContext.Provider>

}

export default AuthContextProvider