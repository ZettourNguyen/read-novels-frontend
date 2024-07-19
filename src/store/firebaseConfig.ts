// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkfln-z8zHNqaghJwlNHyCaU2Uvfpjuuo",
  authDomain: "tttn-ktc.firebaseapp.com",
  projectId: "tttn-ktc",
  storageBucket: "tttn-ktc.appspot.com",
  messagingSenderId: "890399562147",
  appId: "1:890399562147:web:3ce1701544993d1b146216",
  measurementId: "G-6DC5YJXN8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };