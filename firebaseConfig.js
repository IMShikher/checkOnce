import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBjr4O7NBwKZV6sqVs9tJ_xiUwBvGX4VRE",
    authDomain: "checkonce-34c7a.firebaseapp.com",
    databaseURL: "https://checkonce-34c7a.firebaseio.com",
    projectId: "checkonce-34c7a",
    storageBucket: "",
    messagingSenderId: "395786825796",
    appId: "1:395786825796:web:e1e2ab20cc92b282"
  };
  // Initialize Firebase
  const app = Firebase.initializeApp(firebaseConfig);

export const db = app.database(); 