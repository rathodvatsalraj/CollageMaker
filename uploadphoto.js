import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyB88cAYuvIzNvllMM-iGl27z6IZpH_9ZWI",
    authDomain: "collage-maker-9f1c6.firebaseapp.com",
    databaseURL: "https://collage-maker-9f1c6-default-rtdb.firebaseio.com",
    projectId: "collage-maker-9f1c6",
    storageBucket: "collage-maker-9f1c6.appspot.com",
    messagingSenderId: "899902947530",
    appId: "1:899902947530:web:0c3bce3a89499a0f2cf433"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getStorage, ref as sRef, uploadBytesResumable, getDownloadURL }
    from "https://www.gstatic.com/firebasejs/9.18.0/firebase-storage.js"

var q=localStorage.getItem('p');

//  Variable & Refrences
var files = [];
var reader = new FileReader();

var namebox = document.getElementById('namebox');
var extlab = document.getElementById('extlab');
var one1 = document.getElementById('one1');
var proglab = document.getElementById('upprogress');
var SelBtn = document.getElementById('selbtn');
var UpBtn = document.getElementById('upbtn');
var give;
document.getElementById('one').addEventListener('click',()=>{
    give = document.getElementById('img1');

})
document.getElementById('zero').addEventListener('click',()=>{
    give = document.getElementById('img0');

})
document.getElementById('two').addEventListener('click',()=>{
    give = document.getElementById('img2');

})
document.getElementById('three').addEventListener('click',()=>{
    give = document.getElementById('img3');

})
document.getElementById('four').addEventListener('click',()=>{
    give = document.getElementById('img4');

})
document.getElementById('five').addEventListener('click',()=>{
    give = document.getElementById('img5');

})
document.getElementById('six').addEventListener('click',()=>{
    give = document.getElementById('img6');

})
document.getElementById('seven').addEventListener('click',()=>{
    give = document.getElementById('img7');

})
document.getElementById('eight').addEventListener('click',()=>{
    give = document.getElementById('img8');

})
document.getElementById('nine').addEventListener('click',()=>{
    give = document.getElementById('img9');

})
document.getElementById('ten').addEventListener('click',()=>{
    give = document.getElementById('img10');

})
document.getElementById('eleven').addEventListener('click',()=>{
    give = document.getElementById('img11');

})
document.getElementById('twelve').addEventListener('click',()=>{
    give = document.getElementById('img12');

})
document.getElementById('thirteen').addEventListener('click',()=>{
    give = document.getElementById('img13');

})

var input = document.createElement('input');
input.type = 'file';

input.onchange = e => {
    files = e.target.files;

    var extention = GetFileExt(files[0]);
    var name = GetFileName(files[0]);

    namebox.value = name;
    extlab.innerHTML = extention;

    reader.readAsDataURL(files[0]);
}
reader.onload = function () {
    one1.src = reader.result;
}
// SELECTION

SelBtn.onclick = function () {
    input.click();
}

function GetFileExt(file) {
    var temp = file.name.split('.');
    var ext = temp.slice((temp.length - 1), (temp.length));
    return '.' + ext[0];
}
function GetFileName(file) {
    var temp = file.name.split('.');
    var fname = temp.slice(0, -1).join('.');
    return fname;
}

// Upload Process
async function UploadProcess() {
    var ImgToUpload = files[0];
    var ImgName = namebox.value + extlab.innerHTML;

    const metaData = {
        contentType: ImgToUpload.type
    }

    const storage = getStorage();

    const storageRef = sRef(storage, "Images/" + ImgName);

    const UploadTask = uploadBytesResumable(storageRef, ImgToUpload, metaData);

    UploadTask.on('state-changed', (snapshot) => {
        var progess = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        proglab.innerHTML = "Upload " + progess + "%";
        
    },
        (error) => {
            alert("error: image not uploaded!");
        },
        () => {
            getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
                console.log(downloadURL);
                give.src=downloadURL;
            });
        }
    );
}
UpBtn.onclick = UploadProcess;

