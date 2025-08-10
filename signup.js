document.getElementById('Sign-Up').addEventListener('submit1', (event) => {
  event.preventDefault();
});

import app from "./firebase.js"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  if (user) {
    location.replace('Noofphotos.html');
  }
  else {

  }
});
submit1.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementById('Email2').value;
  const password = document.getElementById('pass2').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert('user created');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
})

