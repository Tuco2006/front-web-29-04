/* function somaDoisNumeros(numero1, numero2 = 0) {
let resultado = numero1 + numero2
console.log(resultado) 

}

somaDoisNumeros (68, 8) */

/* function pegarIdade(){
return prompt("Insira sua idade:")
}

function pegarNome(){
return prompt("Insira seu nome:")
}

function exibirPrograma(nome, idade) {
    alert(`Ola, ${nome} de idade ${idade}! Seja bem vindo!`)
}

function iniciarPrograma() {
const nome = pegarNome
const idade = pegarIdade
exibirPrograma (nome, idade)
} */

let nome = prompt("Insira seu usuário:")
console.log(nome.length) /* conta caracteres */
console.log(nome.toLowerCase()) /* deixa tudo minúsculo */
console.log(nome.includes("@")) /* busca tudo que tem @ */


if(nome.length < 8) {
    alert('Nome precisa de mais de 8 caracteres!')
}

let numero = 5

console.log(numero.toFixed(2)) 
console.log(isNaN(numero)) 
console,log(Math.floor(Math.random() * 11)) /* gera um número aleatório */
