function verificar(){

    var dtNasc = Number(document.getElementById('dtnasc').value)
    var dtHoje = new Date().getFullYear() // Coleta o ano atual do computador
    var res = document.getElementById('res')
    var img = document.getElementById('img')
    var idade = Number(dtHoje - dtNasc)

    if(idade > 110){
        alert('Digite o ano corretamente!')
    } else {

        var sexo = document.getElementsByName('sexo')
        var genero = ''
        var img = document.createElement('img') // Cria o elemento IMG para o HTML
        img.style.marginTop = ('20px') // Acrescenta um margin top para a variavel img

        if(sexo[0].checked){ // Checa se a varivael sexo foi marcada em seu primeiro elemnto
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'crianca-m.jpg') // Define o atributo src e adiciona o mesmo para a variavel img
            } else if (idade < 21){
                img.setAttribute('src', 'adolescente-m.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'adulto-m.jpg')
            } else{
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if(sexo[1].checked){ 
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'crianca-f.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'adolescente-f.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'adulta-f.jpg')
            } else{
                img.setAttribute('src', 'idosa-f.jpg')
            }
        }
        res.style.textAlign = 'center' // Alinha a varivael res no centro
        res.innerHTML = `Detecmos ${genero} com ${idade} anos.`
        res.appendChild(img) // Acrescenta a variavel (img) como filha da (res)
    }
}