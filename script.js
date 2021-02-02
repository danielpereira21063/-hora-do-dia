const msg = document.getElementById('msg');
const img = document.getElementById('imagem');
const data = new Date();
const hora = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();
msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`;

if(hora >= 6 && hora < 12) {
    // Dia
    img.src = 'img/manha.jpg';
} else if(hora >= 12 && hora < 18) {
    // Tarde
    img.src = 'img/tarde.jpg';
} else {
    // Noite
    img.src = 'img/noite.jpg';
}