import firebase from "@firebase/app";
import "@firebase/auth";
import dotenv from "dotenv";
dotenv.config();

const app = firebase.default.initializeApp({
  apiKey: "AIzaSyCjSLRZSaeR9kVxUIM9L4Np8et0dr7MDv8",
  authDomain: "sallyeunchoi.firebaseapp.com",
  projectId: "sallyeunchoi",
  storageBucket: "sallyeunchoi.appspot.com",
  messagingSenderId: "447302672728",
  appId: "1:447302672728:web:cf3cccd95ba6b6e992452d",
  measurementId: "G-9PKK600LEB"
});

export const auth = app.auth();
export default app;
