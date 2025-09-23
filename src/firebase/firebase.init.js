// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyClrB8Wb4E30oXp77SYt-QDnxBhBgjCbQo",
  authDomain: "courier-c4dbd.firebaseapp.com",
  projectId: "courier-c4dbd",
  storageBucket: "courier-c4dbd.firebasestorage.app",
  messagingSenderId: "252962909883",
  appId: "1:252962909883:web:a46dcd94674ce8adf6c39e"
};

// Initialize Firebase 
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);