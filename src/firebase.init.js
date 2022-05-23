// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEW1j2W3GWWfYC7IXSiZMwVA2KplU-GNQ",
  authDomain: "tools-manufacturer-clien-6675e.firebaseapp.com",
  projectId: "tools-manufacturer-clien-6675e",
  storageBucket: "tools-manufacturer-clien-6675e.appspot.com",
  messagingSenderId: "685587461056",
  appId: "1:685587461056:web:12658faa26faa96377ce25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
