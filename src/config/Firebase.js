import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid"

const firebaseConfig = {
  apiKey: "AIzaSyCaVFmgX-iOpWgFJTDUJfCqV6dumzS4DIw",
  authDomain: "servicecraft-335d6.firebaseapp.com",
  projectId: "servicecraft-335d6",
  storageBucket: "servicecraft-335d6.appspot.com",
  messagingSenderId: "805999201719",
  appId: "1:805999201719:web:d814cfbf14515c0c986c32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)

export function uploadProductsImages(file) {
  const storageRef = ref(storage, v4())
  uploadBytes(storageRef, file)
  .then(snapshop => {
    (snapshop)
  })
}