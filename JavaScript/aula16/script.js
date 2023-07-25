function parimpar(n){ // A função espera o valor do parâmetro que será enviado através da chamada
    if(n%2 == 0){ // Ação que verifica se o parâmetro retona 0 em uma divisão por 2
        return 'par' // Retona 'par' para a função
    } else{
        return 'impar'// Retona 'impar' para a função
    }
}
console.log(parimpar(6)) // Chamada que retorna o valor do parâmetro que será usado na função