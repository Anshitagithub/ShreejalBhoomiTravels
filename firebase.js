import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBg6to2lB-kbCyyfmLnOrC4MTMVExZElxg",
  authDomain: "shree-jal-bhoomi-travels.firebaseapp.com",
  projectId: "shree-jal-bhoomi-travels",
  storageBucket: "shree-jal-bhoomi-travels.appspot.com",
  messagingSenderId: "714588117224",
  appId: "1:714588117224:web:9a9710a0d868feac53115d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export database
export { db };