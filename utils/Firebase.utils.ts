//@ts-nocheck

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtsMXuYNns0lBWTioMVoYoa3L9WNFA4hE",
  authDomain: "modern-walk-703ac.firebaseapp.com",
  projectId: "modern-walk-703ac",
  storageBucket: "modern-walk-703ac.appspot.com",
  messagingSenderId: "171794594479",
  appId: "1:171794594479:web:53bdc46d3e95d0fa77725a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const providerGoogle = new GoogleAuthProvider();
providerGoogle.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, providerGoogle);
};

const providerGithub = new GithubAuthProvider();
providerGithub.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGithubPopup = () => {
  return signInWithPopup(auth, providerGithub);
};

export const auth = getAuth();
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  const { displayName, email } = userAuth;

  if (!userSnapShot.exists()) {
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        ...additionalInformation,
      });
    } catch (error) {
      console.error(error);
    }
  }
  return userDocRef;
};
