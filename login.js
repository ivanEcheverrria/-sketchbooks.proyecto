document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault(); // evita recargar la página

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    // Validaciones
    if(email === "" || password === ""){
        msg.textContent = "Por favor, llena todos los campos.";
        msg.style.color = "red";
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        msg.textContent = "Escribe un correo electrónico válido.";
        msg.style.color = "red";
        return;
    }

    // Si todo es válido
    msg.textContent = "Acceso concedido ✔️ Redirigiendo...";
    msg.style.color = "green";

    // Redirección a inicio.html después de 1 segundo
    setTimeout(() => {
        window.location.href = "inicio.html";
    }, 1000);
});

