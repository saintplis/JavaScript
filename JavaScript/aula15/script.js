let num = [2,3,6,2,7] // Criando um array
num.push(1) // Adicionando o valor 1 na ultima posição do array
num.sort() // Colocando o array em ordem crescente
console.log(`Vetor: ${num}`)
console.log(`Vetor com ${num.length} posições`)
console.log(`O elemnto ${num[0]} está na posição 0 do vetor`)
console.log(`O valor 3 está na posição ${num.indexOf(3)}`) // Procura o valor dentro do vetor e retorna seu indice