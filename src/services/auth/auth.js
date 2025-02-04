// src/database/auth.js
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJxgF3BGweSxOXTiQB_J8JKn7AUk6m1Ew",
  authDomain: "react-app-loja.firebaseapp.com",
  projectId: "react-app-loja",
  storageBucket: "react-app-loja.appspot.com",
  messagingSenderId: "134517655750",
  appId: "1:134517655750:web:e393b180763817fb32efc7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db };
export default auth ;