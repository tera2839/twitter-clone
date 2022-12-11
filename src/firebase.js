import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyB3vIHPl2PcSJQ9zvSUsaGysb5rZ1L3mTI",
  authDomain: "twitter-app-8824c.firebaseapp.com",
  projectId: "twitter-app-8824c",
  storageBucket: "twitter-app-8824c.appspot.com",
  messagingSenderId: "736602128009",
  appId: "1:736602128009:web:6d2731aa4f1e0f94701058"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {provider, auth}

export default db;