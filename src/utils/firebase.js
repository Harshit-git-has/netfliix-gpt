// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcrQPcmL5J1i5-Lv_749BHkZ6pV1HhrTw",
  authDomain: "netfliixgpt-32c90.firebaseapp.com",
  projectId: "netfliixgpt-32c90",
  storageBucket: "netfliixgpt-32c90.firebasestorage.app",
  messagingSenderId: "1008681291048",
  appId: "1:1008681291048:web:1148f6c205b1c57f06d41d",
  measurementId: "G-FPV3LFZ1BY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 