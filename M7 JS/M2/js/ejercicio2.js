document.getElementById("form-login").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        document.getElementById("mensaje").innerHTML = "Inicio de sesión exitoso.";
    } else {
        document.getElementById("mensaje").innerHTML = "Credenciales incorrectas. Inténtalo de nuevo.";
    }
});