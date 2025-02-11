import { initializeApp } from "firebase/app";
// import other necessary Firebase services

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

try {
  const app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
  // ... rest of your Firebase code ...
} catch (error) {
  console.error('Firebase initialization failed:', error);
  // Handle the error appropriately, e.g., display a user-friendly message
  // or fallback to alternative functionality.
}

