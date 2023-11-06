// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.VITE_APIKEY,
  // authDomain:import.meta.env.VITE_AUTHDOMAIN,
  // projectId:import.meta.env.VITE_PROJECTID,
  // storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  // appId:import.meta.env.VITE_APPID

  apiKey: "AIzaSyBoehcB-YsR-TNvDrqDAcN_AgQKF0rcYO8",
  authDomain: "job-seeker-7875d.firebaseapp.com",
  projectId: "job-seeker-7875d",
  storageBucket: "job-seeker-7875d.appspot.com",
  messagingSenderId: "363433090990",
  appId: "1:363433090990:web:77b4e86501acaccc31723f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;