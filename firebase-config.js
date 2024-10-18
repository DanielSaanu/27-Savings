// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJKqMIAk1UNrQA4aIvZrMmhERS-51GoY8",
  authDomain: "group-27-savings-webapp.firebaseapp.com",
  databaseURL: "https://group-27-savings-webapp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "group-27-savings-webapp",
  storageBucket: "group-27-savings-webapp.appspot.com",
  messagingSenderId: "246251314484",
  appId: "1:246251314484:web:1aed9f5422ebd7ca9f9961",
  measurementId: "G-Q3Z5D0LCSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);