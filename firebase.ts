import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsRe09ChPL8LAWh65I8Ih86uguf8dJLgY",
  authDomain: "netflix-clone-b2b2f.firebaseapp.com",
  projectId: "netflix-clone-b2b2f",
  storageBucket: "netflix-clone-b2b2f.appspot.com",
  messagingSenderId: "645577475555",
  appId: "1:645577475555:web:17272d1886639e11ca8cd6"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
