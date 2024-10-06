// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBscN2tUYb011YETtF3wmw7of9zdCrKl_8",
  authDomain: "bootcamp-bookshop-website.firebaseapp.com",
  projectId: "bootcamp-bookshop-website",
  storageBucket: "bootcamp-bookshop-website.appspot.com",
  messagingSenderId: "780043551457",
  appId: "1:780043551457:web:1ca13d2357ebcf28486da0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;