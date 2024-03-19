// This is a example file, you should create a firebase.utils.js with the correct configuration to make it work

import { initializeApp } from "firebase/app";

// Add firebase configuration from console
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

export const app = initializeApp(firebaseConfig);
