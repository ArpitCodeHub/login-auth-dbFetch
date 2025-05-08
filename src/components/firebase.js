import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";            //helps register new user to the firebase console
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC3VjlKvhgAIArhSJ3qlDpllIwBYbVyvSU",
    authDomain: "login-auth-b25d6.firebaseapp.com",
    projectId: "login-auth-b25d6",
    storageBucket: "login-auth-b25d6.firebasestorage.app",
    messagingSenderId: "920561640726",
    appId: "1:920561640726:web:20b7862060caf377b9dc37"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth();
  export const db = getFirestore(app);
  export default app;