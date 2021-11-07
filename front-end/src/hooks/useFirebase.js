import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import FirebaseInit from "../firebase/firebase.init";
FirebaseInit();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");


    const auth = getAuth();

    const emailSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => setUser(userCredential.user))
    }
    const emailSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => setUser(userCredential.user))
    }

    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}))
            .catch(error => setError(error.message))
    }

    return {
        user,
        emailSignUp,
        emailSignIn,
        setError,
        error,
        logOut
    }
}

export default useFirebase;
