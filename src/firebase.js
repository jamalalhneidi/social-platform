// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDD3PI-t8c0HxUU-T54uVDw63-d3smeQIo",
    authDomain: "social-platform-a1b47.firebaseapp.com",
    projectId: "social-platform-a1b47",
    storageBucket: "social-platform-a1b47.appspot.com",
    messagingSenderId: "766898382986",
    appId: "1:766898382986:web:f8b469811480a28ebb2573",
    measurementId: "G-C9VP2DB5SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);