import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9IeU_IE87dl-R_Nw1Vt0rRCQTSGrNV-E",
  authDomain: "story-cat-db.firebaseapp.com",
  projectId: "story-cat-db",
  storageBucket: "story-cat-db.appspot.com",
  messagingSenderId: "862454381228",
  appId: "1:862454381228:web:3b7eaed3273d2909397d09",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
