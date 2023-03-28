import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCOoSsffaWccTaq75OjBaMqnb02voaKxAA",
  authDomain: "b-7-mi-12.firebaseapp.com",
  projectId: "b-7-mi-12",
  storageBucket: "b-7-mi-12.appspot.com",
  messagingSenderId: "72868017447",
  appId: "1:72868017447:web:24b483ed411a72862de502",
  measurementId: "G-3S32RHWGHH"

  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export default app;