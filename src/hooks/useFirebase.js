import {
    getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile
    , signInWithEmailAndPassword, signOut, onAuthStateChanged
} from "firebase/auth";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import initializeAuthentication from './../components/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const [password, setPassword] = useState('');
    //   const [isLogin, setIsLogin] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    //  const history = useHistory();
    //sign up functionality //reg
    // const signUpUser = (email, password, name, image) => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((result) => {
    //             setUser(result.user)
    //             updateProfile(auth.currentUser, {
    //                 displayName: name,
    //                 photoURL: image
    //             }).then(() => {
    //                 swal("Good job!", "Account has been created!", "success");
    //                 history.push('/');
    //             })

    //         }).catch(error => swal("Something went wrong!", `${error.message}`, "error"))
    // }

    //sign in functionality
    // const signInUser = (email, password) => {
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             setUser(result.user);
    //             swal("Sign in Successful!", "Welcome back !", "info")
    //             history.push('/');
    //         })
    //         .catch(error => swal("Something went wrong!", `${error.message}`, "error"))
    // }
    //google sign in 


    // sign in using google
    const signInUsingGoogle = () => {
        setIsLoading(true);

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result)
                swal("Good job!", "Account has been created!", "success");
                // history.push('/');

            })
            .finally(() => setIsLoading(false));
    }
    //handling state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                // user is signed out
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    // //handling email and password change
    // const handleEmailchange = e => {
    //     setEmail(e.target.value);
    // }
    // const handlePasswordchange = e => {
    //     setPassword(e.target.value);
    // }
    //   const toggleLogin = e => {
    //     setIsLogin(e.target.checked);

    //   }

    // const handleRegistration = e => {
    //     e.preventDefault();
    //     console.log(email, password);
    //     if (password.length < 6) {
    //         setError('password must be six character');
    //         return;
    //     }
    //     if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
    //         setError('password must be upper and lower case');
    //         return;
    //     }

    //     // isLogin ?signInUser (email, password) : signUpUser(email, password);

    // }


    //logging out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                swal("Logout Successful!", "You are logged out!", "success");
                // history.push('/signin')

            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
        // signInUser,
        // signUpUser,
        // handleRegistration,
        // handleEmailchange,
        // handlePasswordchange
    }
}

export default useFirebase;