import app from "./firebase.js"
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
const Auth = getAuth(app);
onAuthStateChanged(Auth, (user) => {
  if (user) {
    location.replace('Noofphotos.html');
  }
  else {

  }
})
submit2.addEventListener('click', (event) => {
  event.preventDefault();

  const email = document.getElementById('Email1').value;
  const password = document.getElementById('pass1').value;
  signInWithEmailAndPassword(Auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert('user signed in');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
})