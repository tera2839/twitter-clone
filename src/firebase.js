import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnKviSxoegO8k2ppq1D1tcFi2GXjPd6go",
  authDomain: "twitter-53386.firebaseapp.com",
  projectId: "twitter-53386",
  storageBucket: "twitter-53386.appspot.com",
  messagingSenderId: "949156083262",
  appId: "1:949156083262:web:968594b855ad5e590e436f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;