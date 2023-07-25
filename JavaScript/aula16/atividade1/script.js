array = []
let terminal = document.getElementById('terminal')
let div = document.createElement('div')

function adicionar(){
    let num = Number(document.getElementById('num').value)
    let select = document.getElementById('select')
    
    if(num >= 1 && num <= 100){

        array.push(num)

        let option = document.createElement('option')
        select.appendChild(option)

        option.innerText = (`Valor ${num} adicionado.`)

        terminal.innerHTML = ''

    } else{
        
        alert('Valor inválido ou já encontrado na lista')

    }

}
function finalizar(){
    if(array.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        
        terminal.appendChild(div)
        let ordem = array.sort()
        let total = 0
        let media = 0
        
        for(let i in array){
            total += array[i]
        }
    
        media = total / ordem.length

        div.innerHTML = ''
        div.innerHTML += (`Ao todo, temos ${ordem.length} números cadastrados. <br><br>
                        O maior valor informado foi ${ordem[ordem.length - 1]}. <br><br>
                        O menor valor informado foi ${ordem[0]}. <br><br>
                        Somando todos os valores, temos ${total}. <br><br>
                        A média dos valores digitados é ${media}.`)
    }
}