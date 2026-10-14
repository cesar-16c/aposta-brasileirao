// Preencha com os dados do seu projeto no Firebase (Configurações do projeto > Seus apps > App da Web).
// Essas chaves não são secretas: quem protege os dados são as regras do Firestore (firestore.rules).
export const ADMIN_EMAIL = "cesar.santos16c@gmail.com";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJZe5FvpXwl2At5OvGTBTwKwwYgYWECjI",
  authDomain: "aposta-brasileirao.firebaseapp.com",
  projectId: "aposta-brasileirao",
  storageBucket: "aposta-brasileirao.firebasestorage.app",
  messagingSenderId: "663324911320",
  appId: "1:663324911320:web:7efbc3f598dc090a7c99ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
