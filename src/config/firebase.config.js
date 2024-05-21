import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyANPWZTGAmGjyct3zMXtqwUON3lkBYqikE",
  authDomain: "db-store-app.firebaseapp.com",
  projectId: "db-store-app",
  storageBucket: "db-store-app.appspot.com",
  messagingSenderId: "918175805200",
  appId: "1:918175805200:web:7a3320c0640de0a77dff95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// CRUD operation
const db = getFirestore(app)

export {db}