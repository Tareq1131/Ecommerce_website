// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy9cgKPHHr1W6TJyTV2naQ7jUzaoub1_I",
  authDomain: "ema-john-with-firebase-a-91e2f.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-91e2f",
  storageBucket: "ema-john-with-firebase-a-91e2f.appspot.com",
  messagingSenderId: "41837977709",
  appId: "1:41837977709:web:12872d4a35802551a21f64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;