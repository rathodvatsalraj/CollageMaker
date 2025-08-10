import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, set, ref, get, child } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import app from "./firebase.js"
const auth = getAuth(app);
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL }
  from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";

var user;
var uid;

onAuthStateChanged(auth, (user) => {
  if (!user) {
    location.replace('index.html');
  }
  else {
    user = auth.currentUser;
    uid = user.uid;

    const db = getDatabase();
    var arr = [];
    get(child(ref(db), `users/${uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
        arr = snapshot.val().collage;
        console.log(snapshot.val());
        var c = document.getElementById('collex');
        c.innerHTML = "";
        var i = 0;
        var input = "";
        for (i = 0; i < arr.length; i++) {
          input += `<div class="collages">${arr[i]}</div>`
        }
        c.innerHTML = input;

      } else {
        console.log("No data available");
      }

    })
      .catch((error) => {
        console.error(error);
      });

    const BackButton = document.getElementById('back');
    BackButton.addEventListener('click', (v) => {
      v.preventDefault();
      console.log("working");
      location.replace('Noofphotos.html');
    })
  }
});

