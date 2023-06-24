import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzrwshZEuV31j-yOZ7zJT-fjDuii9Fqmc",
  authDomain: "abhishek-portfolio-99e10.firebaseapp.com",
  projectId: "abhishek-portfolio-99e10",
  storageBucket: "abhishek-portfolio-99e10.appspot.com",
  messagingSenderId: "20230494288",
  appId: "1:20230494288:web:daed42d754815c21725955",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
