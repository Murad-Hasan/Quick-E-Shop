import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig/firebaseConfig";
import { useState } from "react";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const SocialLogIn = () => {

    const [userInfo, SetUserInfo] = useState({
        isLogIn: false,
        displayName: '',
        email:'',
        photoURL:''
    })

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        SetUserInfo({
            isLogIn: true,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
        })
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  
  const handleGitHubSignIn = () => {
   const provider = new firebase.auth.GithubAuthProvider();
    firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
        const user = result.user
        SetUserInfo({
            isLogIn: true,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
        })
    }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
    })
  }

console.log(userInfo);
  return (
    <div className="pt-3 d-flex justify-content-center align-items-center flex-column">
      <strong className="pb-3">Sign in with social network</strong>
      <button onClick={handleGoogleSignIn} className="social-signin google">
        Log in with Google
      </button>
      <button onClick={handleGitHubSignIn} className="social-signin github">Log in with GitHub</button>
    </div>
  );
};

export default SocialLogIn;
