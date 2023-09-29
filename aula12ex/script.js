function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    //var hora = 13
    msg.innerHTML = `Agora são ${hora}:${min}h.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'images/morning.png'
        document.body.style.background = '#74be28'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'images/afternoon.png'
        document.body.style.background = '#fd9b04'
    } else {
        // BOA NOITE!
        img.src = 'images/night.png'
        document.body.style.background = '#100b1f'
    }
}