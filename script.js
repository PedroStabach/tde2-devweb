//functions 
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Não é possível dividir por zero";
    }
    return a / b;
}

function aplicarFuncao(num, func) {
    return func(num);
}

//CONSTANTES
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dobro = n => n * 2;

const filtrarPares = (array) => {
    return array.filter(num => num % 2 === 0); // arrow function dentro
};

const calcularMedia = (array) => {
    const soma = array.reduce((acc, num) => acc + num, 0); // arrow function dentro
    return soma / array.length;
};

//CONSOLES
console.log("Números pares: ", filtrarPares(numeros));
console.log("Média dos números: ", calcularMedia(numeros));
console.log("Dobro de 5: ", dobro(5));
console.log("Aplicando callback (dobro) ao número 10: ", aplicarFuncao(10, dobro));