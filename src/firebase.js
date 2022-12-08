import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfPvhPSf68Ie9zKVIrb5c-47aU_4ha-Z8",
  authDomain: "twitter-app2-bb475.firebaseapp.com",
  projectId: "twitter-app2-bb475",
  storageBucket: "twitter-app2-bb475.appspot.com",
  messagingSenderId: "160525634190",
  appId: "1:160525634190:web:fb3fa1e3adc350e5c957df"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;