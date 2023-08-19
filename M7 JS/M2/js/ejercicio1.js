document.getElementById("form-edad").addEventListener("submit", function (event) {
    event.preventDefault();

    var edad = parseInt(document.getElementById("edad").value);

    if (age >= 18) {
        document.getElementById("mensaje").innerHTML = "¡Bienvenido! Eres mayor de 18 años.";
    } else {
        document.getElementById("mensaje").innerHTML = "Lo siento, debes ser mayor de 18 años.";
    }
});