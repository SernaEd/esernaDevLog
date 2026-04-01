import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";

// Your web app's Firebase configuration
// Replace these with your project's actual configuration from the Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyAkkU5EX_9PRx01HVglQdb38XscP-LqE-g",
  authDomain: "animaquantrix.firebaseapp.com",
  projectId: "animaquantrix",
  storageBucket: "animaquantrix.firebasestorage.app",
  messagingSenderId: "106287336359",
  appId: "1:106287336359:web:27684aaf34dbd6e42a8482",
  measurementId: "G-7JHTHV13EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({tabManager: persistentMultipleTabManager()})
});

// Whitelist for allowed users
export const ALLOWED_USERS = ["sernaed95@gmail.com", "another-allowed-user@gmail.com"];

export default app;
