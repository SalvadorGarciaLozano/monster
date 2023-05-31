// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9TT-tspzLGofsPg3AgIjqOY6kehrTiIM",
  authDomain: "el-fin-de-los-finales.firebaseapp.com",
  projectId: "el-fin-de-los-finales",
  storageBucket: "el-fin-de-los-finales.appspot.com",
  messagingSenderId: "97572607604",
  appId: "1:97572607604:web:fd2037969f107770cca321",
  measurementId: "G-LM63GK1QJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig;