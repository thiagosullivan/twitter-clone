// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCObNg-5xj2lfDlaDlgtnfVTMmGj3t5ajk",
    authDomain: "twitter-clone-yt-b4ec0.firebaseapp.com",
    projectId: "twitter-clone-yt-b4ec0",
    storageBucket: "twitter-clone-yt-b4ec0.appspot.com",
    messagingSenderId: "689594378834",
    appId: "1:689594378834:web:c250e783ba7e1c65784d8b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };