function contar(){
    let inicio = Number(document.getElementById('inicio').value) // Definindo variáveis
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)
    let res = document.getElementById('res')

    if (inicio == 0 || fim == 0 || passo == 0){ 
        alert('[ERRO] Digite os valores corretamente') // Verificado se as variáveis são nulas e retornando [ERRO]
    } else{
        res.innerText = 'Contando:' // Definindo texto incial para variável resultado
        if(inicio < fim){ // Condicional para validação se o número incial é maior que o final
            for (let i = inicio;i <= fim;i += passo){ // Loop for para números com inicial menor
                res.innerText += (`${i} \u{1FAE0}`) // Concatenando os valores do loop for na variável resultado
            }
        } else{ // Caso contrário da primeira validação
            for (let i = inicio;i >= fim;i -= passo){ // Loop for para números com inicial maior
                res.innerText += (`${i} \u{1FAE0}`)
            }
        }
        res.innerText += (` \u{1F61A}`) // Emogi final
    }
}