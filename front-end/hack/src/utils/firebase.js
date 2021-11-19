// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKdG_cFNV4to75lo2fBfWZfq0Q5nYRr4A",
    authDomain: "hackathon-9244b.firebaseapp.com",
    projectId: "hackathon-9244b",
    storageBucket: "hackathon-9244b.appspot.com",
    messagingSenderId: "604814667275",
    appId: "1:604814667275:web:93ff39d6d1ec31f57d210e",
    measurementId: "G-LYBR5EJ02C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);