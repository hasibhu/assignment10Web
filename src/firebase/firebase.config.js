// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log(import.meta.env.VITE_APIKEY);
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyBCv9-TA4w2hTLCWtQ04fJeFXk3dyKxU",
    authDomain: "assignment10-f5bf2.firebaseapp.com",
    projectId: "assignment10-f5bf2",
    storageBucket: "assignment10-f5bf2.appspot.com",
    messagingSenderId: "548716723849",
    appId: "1:548716723849:web:ce28217446a568b7eed058"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
