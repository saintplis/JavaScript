var hora = new Date().getHours()
console.log(`Agora são exatamente ${hora} hora(s).`)
if (hora >= 0 && hora < 6){
    console.log('Boa madrugada.')
} else if (hora < 12){
    console.log('Bom dia.')
} else if (hora <= 18){
    console.log('Boa tarde.')
} else {
    console.log('Boa noite.')
}