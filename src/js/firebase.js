// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI0bj8mvUZNoql9rfPc1-750W3ZzX1KV4",
  authDomain: "manosparana-33faa.firebaseapp.com",
  projectId: "manosparana-33faa",
  storageBucket: "manosparana-33faa.appspot.com",
  messagingSenderId: "1007025934551",
  appId: "1:1007025934551:web:d825fce53e4c9ce5102092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore();

export const save = (ficha) => {
  addDoc(collection(db, 'inscription'), { ficha })
  console.log(ficha)
  console.log('Funciona!!!')
}