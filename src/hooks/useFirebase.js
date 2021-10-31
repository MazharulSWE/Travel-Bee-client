import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/Firebase.init";



initializeAuthentication();


const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = ()=>{
    const [user, setUser] = useState({});
    const [error, setError] = useState(" ");
    const [isLoading, setIsLoading] = useState(true);


//Google sign in
const signInUsingGoogle = ()=>{
    return signInWithPopup(auth, googleProvider).catch((error)=>{
        setError(error.message)
    });
};

//sign out
const userSignOut = ()=>{
    signOut(auth)
    .then(()=>{
        setUser({});
    })
    .catch((error) =>{
        //An error occured
    })
    .finally(()=>{
        window.location.reload();
    });
};

// observe state change 
useEffect(()=>{
    setIsLoading(true);
    onAuthStateChanged(auth, (user)=>{
        if (user) {
            setUser(user)
        } else {
            
        }
        setIsLoading(false);
    });
},[])

return{
    user,
    error,
    userSignOut,
    setError,
    setUser,
    signInUsingGoogle,
    isLoading,
}
};

export default useFirebase;
