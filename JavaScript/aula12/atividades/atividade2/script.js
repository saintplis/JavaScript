function carregar(){
    var hora = new Date().getHours() // Coleta a hora atual do computador
    var txtHora = document.getElementById('txthora')
    var img = document.getElementById('img')
    var body = document.body

    txtHora.innerText = `Agora são ${hora} horas.`
    
    if (hora > 6 && hora < 12){ // Verifica a hora
        body.style.background = 'moccasin' // Altera o background da página
        img.src = 'dia.jpg' // Altera o src da imagem
    } else if (hora >= 12 && hora <= 18){
        body.style.background = 'darksalmon'
        img.src = 'almoco.jpeg'
    } else {
        body.style.background = 'gray'
        img.src = 'janta.jpg'
    }
}