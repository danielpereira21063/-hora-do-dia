function carregar() {
    const msg = document.getElementById('msg');
    const titulo = document.getElementById('titulo');
    const img = document.getElementById('imagem');
    const data = new Date();
    let hora = data.getHours() - 1;
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`;
    if(hora >= 6 && hora < 12) {
        // Dia
        titulo.innerHTML = 'Bom dia!';
        img.src = 'img/manha.jpg';
        document.body.style.background = '#64b0e1';
    } else if(hora >= 12 && hora <= 18) {
        // Tarde
        titulo.innerHTML = 'Boa tarde!';
        img.src = 'img/tarde.jpg';
        document.body.style.background = '#b9846f';
    } else {
        // Noite
        titulo.innerHTML = 'Boa noite!';
        img.src = 'img/noite.jpg';
        document.body.style.background = '#505054';
    }
    setTimeout(() => {
        carregar();
    }, 1000);
}