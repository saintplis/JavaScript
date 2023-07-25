// RECURSIVIDADE
function fatorial(n){ // Função espera o parâmetro (n) que virá da chamada
    if (n == 1){ // Ação a ser desenvolvida caso (n == 1) pois (1! = 1)
        return 1
    } else{
        return n * fatorial(n-1) // multiplica o parâmetro (n) com o fatorial de seu número anterior (fatorial(n-1))
    }
}
console.log(fatorial(5)) // Chamada que define o parâmetro da função

/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1

*/