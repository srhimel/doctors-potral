import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInit from "../firebase/firebase.init";
FirebaseInit();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();

    const emailSignUp = (name, email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                updateProfile(auth?.currentUser, {
                    displayName: name
                })
                setUser(result.user)
            })
    }
    const emailSignIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => setUser({}))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {

        const unsubscribe = () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user)
                } else {
                    setUser({})
                }
                setIsLoading(false)
            });

        }
        return unsubscribe();
    }, [auth])

    return {
        user,
        emailSignUp,
        emailSignIn,
        setError,
        error,
        logOut,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;
