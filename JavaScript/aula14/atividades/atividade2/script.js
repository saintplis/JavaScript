function gerar(){
    let num = Number(document.getElementById('num').value) // Definindo as variáveis com DOM
    let select = document.getElementById('tabuada')

    if(num == 0){
        alert('[ERRO] Por favor, digite um número válido') // Verificação de erro, caso o número seja nulo
    } else{
        select.innerText = '' // Define o resultado do select como nulo e apaga as opções criadas anteriormente
        for(let i = 1;i <=10;i++){ // Loop for para criação de 10 elementos
            let option = document.createElement('option') // Criação dos elementos <option> no HTML
            select.appendChild(option) // Definindo o option como filho do elemento select
            option.innerText += (`${num} x ${i} = ${num*i}`) // Mostrando resultado
        }
    }
}
