// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG1Tz26IRm5NM9wECwIQYuOTiZ7qDjnO0",
  authDomain: "ema-john-simple-with-aut-e69fb.firebaseapp.com",
  projectId: "ema-john-simple-with-aut-e69fb",
  storageBucket: "ema-john-simple-with-aut-e69fb.appspot.com",
  messagingSenderId: "69677499803",
  appId: "1:69677499803:web:eebad264775a3da184cd3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;