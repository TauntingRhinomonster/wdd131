// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth for authentication
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1q-pQt2t_iouQHbMRgHPeGtMGRPdjsr4",
  authDomain: "game-space-9b040.firebaseapp.com",
  projectId: "game-space-9b040",
  storageBucket: "game-space-9b040.firebasestorage.app",
  messagingSenderId: "123036282863",
  appId: "1:123036282863:web:26a3ff99cfdbf56836d01a",
  measurementId: "G-PCT8DD4Z0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app); // <-- THIS LINE IS CRUCIAL

export default app;