import app from "./firebase.js"
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
const Auth = getAuth(app);

onAuthStateChanged(Auth, (user) => {
  if (!user) {
    location.replace('index.html');
  }
  else {

  }
})
lgout.addEventListener('click', () => {
  signOut(Auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

})

// document.getElementById('sub3')