// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGQO5yxRfBDXKFYXvaSjVNrYr2sjrXprI",
  authDomain: "seo-ai-writer-3f908.firebaseapp.com",
  projectId: "seo-ai-writer-3f908",
  storageBucket: "seo-ai-writer-3f908.firebasestorage.app",
  messagingSenderId: "386583935325",
  appId: "1:386583935325:web:af63402adff8ac1c5490b4",
  measurementId: "G-B5XGL4FQDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);