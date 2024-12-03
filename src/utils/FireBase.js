import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCerIYUcuczyrOKpvCS3PF4CNHMT4rswRo",
  authDomain: "test-923dd.firebaseapp.com",
  databaseURL: "https://test-923dd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-923dd",
  storageBucket: "test-923dd.appspot.com",
  messagingSenderId: "287405753812",
  appId: "1:287405753812:web:0a42dbe1dd899a9dc28241"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export{auth,database,db}