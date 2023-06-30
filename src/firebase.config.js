

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBQ5pcm41T-KTcQB6ebGZtlw6hX6sCjIYQ",
  authDomain: "maltimart-d1b87.firebaseapp.com",
  projectId: "maltimart-d1b87",
  storageBucket: "maltimart-d1b87.appspot.com",
  messagingSenderId: "345511076751",
  appId: "1:345511076751:web:683e407f26836e4b7ae1fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;