import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk0NqtnZt-5A1YwJ1kVQl69RHz-pihgQs",
  authDomain: "trial-12407.firebaseapp.com",
  projectId: "trial-12407",
  storageBucket: "trial-12407.appspot.com",
  messagingSenderId: "319492001338",
  appId: "1:319492001338:web:8c64e59fbca81ac35baf03",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
