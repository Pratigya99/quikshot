// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGOQ2urUyJ57ldxXtr0d4ZitL1EpCuYiY",
  authDomain: "quikshot-50cd8.firebaseapp.com",
  projectId: "quikshot-50cd8",
  storageBucket: "quikshot-50cd8.appspot.com",
  messagingSenderId: "49030907490",
  appId: "1:49030907490:web:8ad81243e93f521d74b33b",
  measurementId: "G-ZBHD40YJ62"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
