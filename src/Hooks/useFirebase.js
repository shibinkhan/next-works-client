import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeFirebase from '../Pages/SignUpInOut/Firebase/Firebase.init';

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // googleSignIn
    const googleSignIn = (location, history) => {
        setIsloading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // console.log(user);

                // send data to database
                saveUserInfo(user.email, user.displayName, 'PUT');

                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsloading(false);
            });
    };

    // signUp
    const signUp = (email, password, name, history) => {
        setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user);
                const newUser = { email, displayName: name };
                setUser(newUser);

                // send data to database
                saveUserInfo(email, name, 'POST');

                // send name to firebase after creation
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        // Profile updated!
                    })
                    .catch(error => {
                        setAuthError(error.message);
                    });

                history.replace('/');
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsloading(false);
            });
    };

    // signIn
    const signIn = (email, password, location, history) => {
        setIsloading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user);

                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsloading(false);
            });
    };

    // logOut
    const logOut = () => {
        setIsloading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsloading(false);
            });
    };

    // onAuthStateChanged
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsloading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    // saveUserInfo
    const saveUserInfo = (email, displayName, method) => {
        const user = { email, displayName };
        // console.log(user);
        fetch('https://secure-tundra-16355.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            });
    };

    useEffect(() => {
        fetch(`https://secure-tundra-16355.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAdmin(data.admin);
            });
    }, [user.email]);

    // returns
    return {
        user,
        googleSignIn,
        logOut,
        isLoading,
        signUp,
        signIn,
        admin,
        authError
    };
};

export default useFirebase;