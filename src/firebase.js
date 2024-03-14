import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvtK2iko8p6jnhGFoJjcVlkr4855PrGcA",
  authDomain: "image-upload-166e4.firebaseapp.com",
  projectId: "image-upload-166e4",
  storageBucket: "image-upload-166e4.appspot.com",
  messagingSenderId: "428553053144",
  appId: "1:428553053144:web:448eb8c22ca0b996f688ad",
  measurementId: "G-5LK9CY0T8R"
};

const app = initializeApp(firebaseConfig); // Initialize 'app' first
const auth = getAuth(app); // Then use 'app' in the initialization of other variables
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage, auth };
