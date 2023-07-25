let pessoa = {nome:'Rafael',
sexo:'M',
peso:61.5,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
pessoa.engordar(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg`)