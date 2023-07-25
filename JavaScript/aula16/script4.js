// CÓDIGO PARA FATORIAL
function fatorial(n){ // Função espera o parâmetro (n) que virá da chamada
    let fat = 1
    for(let i = n; i > 1; i--){ // Loop for para diminuir a variável (i) até o valor 2
        fat *= i // O resultado da multiplicação entre a variável (fat = 1) e i será atribuído a varíavel fat
    }
    return fat
}

console.log(fatorial(5)) // Chamada que define o parâmetro da função

// 5! = 5 x 4 x 3 x 2 x 1 = 120