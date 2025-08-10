const NextButton = document.getElementById('sub3');
NextButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("working");
    location.replace('layout.html');
})
function fun(n) {
    localStorage.setItem('n', n)
    console.log('data');
}
const collection = document.getElementById('col');
collection.addEventListener('click', (v) => {
  v.preventDefault();
  console.log("working");
  location.replace('collection.html');
})