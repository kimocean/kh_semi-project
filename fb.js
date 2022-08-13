import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithRedirect, signInWithPopup, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAkxep9jM-FpeZmEzaHlJuhiiQNEHb_HOk",
  authDomain: "semiproject6.firebaseapp.com",
  databaseURL: "https://semiproject6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "semiproject6",
  storageBucket: "semiproject6.appspot.com",
  messagingSenderId: "300720308935",
  appId: "1:300720308935:web:09cbe5d14559220c0cb4e2"
};