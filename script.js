// variaveis gerais (coleta de dados)
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

// setando os charsets pra gerar as senhas
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novaSenha = "";

// puxar o texto html para aparecer
sizePassword.innerHTML = sliderElement.value;

// aumentar os caracteres interativos
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

// chamar o botao da funcao onclick
function generatePassword(){

    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove("hide");

    password.innerHTML = pass;

    novaSenha = pass;

}
// cria função copiar item (senha)
function copyPassword() {
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}