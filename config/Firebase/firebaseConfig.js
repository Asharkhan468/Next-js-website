import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAfPC8m-uQdramyOKp12P7UiZUYnnFYRXM",
  authDomain: "nextjs-website-bf4ce.firebaseapp.com",
  projectId: "nextjs-website-bf4ce",
  storageBucket: "nextjs-website-bf4ce.appspot.com",
  messagingSenderId: "574175089141",
  appId: "1:574175089141:web:a45b2a289bbb1213f590bc",
  measurementId: "G-N9CKH8JJMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);