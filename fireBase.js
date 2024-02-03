
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCZaA5_TeKNYZGgwtoFVva7_UdV8NET5NE",
  authDomain: "hackathon---bike-the-big-apple.firebaseapp.com",
  projectId: "hackathon---bike-the-big-apple",
  storageBucket: "hackathon---bike-the-big-apple.appspot.com",
  messagingSenderId: "861770965627",
  appId: "1:861770965627:web:235cc4fd996d69e57ef8de",
  measurementId: "G-5Z8N96H9DP"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
auth.useDeviceLanguage();
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
    try {
  //the signInWithPopUp() method accepts ANY provider we create. This is all our authentication logic
    signInWithPopup(googleProvider).then((res) => {
    const user = res.user;
    console.log(user)
  })
     } catch (err) {
      console.log(err);
    }
  };

  export const signOut = async () =>{
    try {
      await auth.signOut()
      alert("you've signed out - congrats.")
    } catch(err) {
      console.log(err)
    }
  }