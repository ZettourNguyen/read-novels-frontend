import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_FIREBASE_APP_ID,
  // measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
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
const storage = getStorage(app);

export { storage };
