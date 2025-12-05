document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault(); // evita recargar la página

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
    let estado = document.getElementById("msg");

    // Validación simple
    if(nombre === "" || email === "" || mensaje === ""){
        estado.style.color = "red";
        estado.textContent = "Por favor completa todos los campos.";
        return;
    }

    // Validación de correo
    let patron = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if(!patron.test(email)){
        estado.style.color = "red";
        estado.textContent = "Por favor ingresa un correo válido.";
        return;
    }

    // Si todo está bien
    estado.style.color = "green";
    estado.textContent = "Mensaje enviado correctamente ✔";

    // Limpia el formulario
    document.getElementById("contactForm").reset();
});
