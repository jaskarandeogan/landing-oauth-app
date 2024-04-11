'use client'

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  isSignInWithEmailLink
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const facebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider);
  };

  const sendEmail = (email) => {
    sendSignInLinkToEmail(auth, email, {
      url: process.env.NEXT_PUBLIC_URL + "/login",
      handleCodeInApp: true,
    })
      .then(() => {
        console.log("Verification email sent");
        window.localStorage.setItem('emailForSignIn', email);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  useEffect(() => {
    const email = window.localStorage.getItem('emailForSignIn');
    if (isSignInWithEmailLink(auth, window.location.href) && email) {
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          window.localStorage.removeItem('emailForSignIn');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, facebookSignIn, sendEmail, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};