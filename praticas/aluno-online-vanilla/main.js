const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const erroEmail = document.getElementById("erroEmail");
const erroSenha = document.getElementById("erroSenha");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); 

    let valido = true;

    // Valida o e-mail
    if (email.value.trim() === "") {
        erroEmail.textContent = "O campo de email é obrigatório.";
        email.style.border = "1px solid red";
        valido = false;
    } else {
        erroEmail.textContent = "";
        email.style.border = "1px solid #ccc";
    }

    
    if (senha.value.trim() === "") {
        erroSenha.textContent = "O campo de senha é obrigatório.";
        senha.style.border = "1px solid red";
        valido = false;
    } else {
        erroSenha.textContent = "";
        senha.style.border = "1px solid #ccc";
    }

    
    if (valido) {
        window.location.href = "dashboard.html";
    }
});


email.addEventListener("input", function() {
    erroEmail.textContent = "";
    email.style.border = "1px solid #ccc";
});


senha.addEventListener("input", function() {
    erroSenha.textContent = "";
    senha.style.border = "1px solid #ccc";
});