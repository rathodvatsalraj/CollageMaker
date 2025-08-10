function checkpass() {
    if (document.getElementById('pass2').value != document.getElementById('cpass').value) {
        document.getElementById('al').classList.remove('d-none');
    } else {
        document.getElementById('al').classList.add('d-none');
    }
}
