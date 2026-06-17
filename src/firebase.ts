import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsnbnapDUFgUfEDLhsMyyG5peJt3zNzLs",
  authDomain: "bookverse-a2e2f.firebaseapp.com",
  projectId: "bookverse-a2e2f",
  storageBucket: "bookverse-a2e2f.firebasestorage.app",
  messagingSenderId: "227616632841",
  appId: "1:227616632841:web:f432977c1a22d3de7048d8",
  measurementId: "G-HKS27Z2DCR",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;