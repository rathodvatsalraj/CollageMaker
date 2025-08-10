import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, set, ref,get,child } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import app from "./firebase.js"
const auth = getAuth(app);
import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL }
    from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";

var q = localStorage.getItem('p');
var user;
var uid;

onAuthStateChanged(auth, (user) => {
    if (!user) {
        location.replace('index.html');
    }
    else {
        user = auth.currentUser;

        uid = user.uid;
    }
})
var save;
if(localStorage.getItem('n')=='1'){
    save=document.getElementById('collage2');
    console.log('collage2');
}else if(localStorage.getItem('n')=='2'){
    save=document.getElementById('collage3');
    console.log('collage3');
}else if(localStorage.getItem('n')=='3'){
    save=document.getElementById('collage4');
    console.log('collage4');
}else if(localStorage.getItem('n')=='0'){
    save=document.getElementById('collage1');
    console.log('collage1');
}

document.getElementById('Ubtn').addEventListener('click', () => {
    var a = save.innerHTML;
    const db = getDatabase();
    var arr=[];
    get(child(ref(db), `users/${uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
            arr= snapshot.val().collage;
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
        arr.push(a);
        

        set(ref(db, 'users/' + uid), {
            collage: arr
        }).then(()=>{
            alert("Collage is Uploaded.");
        });
        
      }).catch((error) => {
        console.error(error);
      });
    
});