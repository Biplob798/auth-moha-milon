import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// social login

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //   loading usestate

  const [loading, setLoading] = useState(true);

  //   register form

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login form

  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   social login

  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const singInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //   sing out user

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   observe auth stage change

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(
        "observing current user inside useEffect of AuthProvider",
        currentUser
      );
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    singInUser,
    logOut,
    loading,
    singInWithGoogle,
    singInWithGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};

/****
 *
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the auth provider in the main .jsx file
 * 4. access children in the AuthProvider component as children and use jsx in the middle of the provider
 *
 *
 *
 *
 */
