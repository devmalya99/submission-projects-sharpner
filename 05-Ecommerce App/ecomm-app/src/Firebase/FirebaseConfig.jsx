// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKCESprvsrRRSCsMgLVfOc6PaZqKvUrRc",
  authDomain: "fir-auth-01-3c109.firebaseapp.com",
  projectId: "fir-auth-01-3c109",
  storageBucket: "fir-auth-01-3c109.appspot.com",
  messagingSenderId: "821570251706",
  appId: "1:821570251706:web:2db358135963db42e34b83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);