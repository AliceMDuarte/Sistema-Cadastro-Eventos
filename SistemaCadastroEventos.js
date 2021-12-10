var ListaParticipantes = ["Alice", "Jessica", "Marcelo", "Marcos", "Mariana", "João"];

if (ListaParticipantes.length <100){
    //Verificacao Cadastro
    console.log("Cadastro Permitido");
}else {
    console.log("O número de participantes excedeu o limite");
}

let Idade = 18
if (Idade<18){
    //Verificacao Idade
    console.log("Cadastro não permitido por idade");
}else{
    console.log ("Cadastro Permitido. Escolha a Data do Evento.");
}

var data = new Date();
var dataDoEvento = 12/12/2021
if (dataDoEvento => new Date){
    //Verificacao Data
console.log("Data permitida. Cadastre o Evento.")
}else{
    console.log("Data inválida, a data inserida deve ser posterior à atual.")
}

