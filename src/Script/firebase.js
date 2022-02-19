import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Properties
const firebaseConfig = {
  apiKey: "AIzaSyD5Fbg-VmP2emU9F60M4-yOAHnFYlEY2QM",
  authDomain: "eika-shopping-list-plus-fe2.firebaseapp.com",
  projectId: "eika-shopping-list-plus-fe2",
  storageBucket: "eika-shopping-list-plus-fe2.appspot.com",
  messagingSenderId: "1010508926031",
  appId: "1:1010508926031:web:d01991cae3e53c3f3fae3a",
};

const firebaseApp = initializeApp(firebaseConfig);

export const cloudStorageReference = getStorage(firebaseApp);