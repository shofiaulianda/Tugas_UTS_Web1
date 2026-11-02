
function login(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@gmail.com" && password === "12345") {
        alert("Login berhasil!");
        window.location.href = "dashboard.html";
    } else {
        alert("email/password yang anda masukkan salah");
    }
}

function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("formLogin");

    if (formLogin) {
        formLogin.addEventListener("submit", login);
    }
});
