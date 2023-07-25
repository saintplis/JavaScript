let num = [2,6,3,9,8]

console.log(num)
/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
*/

/*
for(let i = 0;i < num.length; i++){ // Mostrando o array com um loop for para cada elemento presente
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
*/

for(let i in num){ // Método exclusivo do for para mostrar índices em um array
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
