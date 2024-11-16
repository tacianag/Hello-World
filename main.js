let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual o seu nome ?");
}

if(nomeUsuário == null){
    elemento.textContent = "Seja bem-vindo";
}else{
    elemento.textContent = nomeUsuário;
}
