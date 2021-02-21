const divMsg = document.getElementById('msg');
const titulo = document.getElementById('titulo');
const img = document.getElementById('imagem');
const divData = document.getElementById('data');

const passouIntervalo = function(valor) {
    if(valor <= 9) {
        return true;
    } else {
        return false;
    }
}

const dayWeek = function(dia) {
    if(dia == 1) {
        return 'Domingo';
    } else if(dia == 2) {
        return 'Segunda-feira';
    } else if(dia == 3) {
        return 'Terça-feira';
    } else if(dia == 4) {
        return 'Quarta-feira';
    } else if(dia == 5) {
        return 'Quinta-feira';
    } else if(dia == 6) {
        return 'Sexta-feira';
    } else if(dia == 7) {
        return 'Sábado';
    }
}


const dataAtual = function() {
    let dia = new Date().getDate();
    let mes = mesExtenso(new Date().getMonth() + 1);
    let ano = new Date().getFullYear();
    diaSemana = dayWeek(new Date().getUTCDay() + 1);
    // if(passouIntervalo(dia) && !passouIntervalo(mes)) {
    //     data = `0${dia}/${mes}/${ano}`;
    // } else if(!passouIntervalo(dia) && passouIntervalo(mes)) {
    //     data = `${dia}/0${mes}/${ano}`;
    // } else if(passouIntervalo(dia) && passouIntervalo(mes)) {
    //     data = `0${dia}/0${mes}/${ano}`;
    // } else {
    //     data = `${dia}/${mes}/${ano}`;
    // }

    if(!passouIntervalo(dia)) {
        return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
    } else {
        return `0${dia} de ${mes} de ${ano}`;
    }
}

const horaAtual = function() {
    if(!passouIntervalo(new Date().getUTCHours() - 3)) {
        return new Date().getUTCHours() - 3;
    } else {
        return `0${+new Date().getUTCHours()- 3}`;
    }
}

const minutoAtual = function() {
    if(!passouIntervalo(new Date().getUTCMinutes())) {
        return new Date().getUTCMinutes();
    } else {
        return `0${+new Date().getUTCMinutes()}`;
    }
}

const segundoAtual = function() {
    if(!passouIntervalo(new Date().getUTCSeconds())) {
        return new Date().getUTCSeconds();
    } else {
        return `0${+new Date().getUTCSeconds()}`;
    }
}

const mesExtenso = function(mes) {
    if(mes == 1) {
        return 'janeiro';
    } else if(mes == 2) {
        return 'fevereiro';
    } else if(mes == 3) {
        return 'março';
    } else if(mes == 4) {
        return 'abril';
    } else if(mes == 5) {
        return 'maio';
    } else if(mes == 6) {
        return 'junho';
    } else if(mes == 7) {
        return 'julho';
    } else if(mes == 8) {
        return 'agosto';
    } else if(mes == 9) {
        return 'setembro';
    } else if(mes == 10) {
        return 'outubro';
    } else if(mes == 11) {
        return 'novembro';
    } else if(mes == 12) {
        return 'desembro';
    }
}

function atualizar() {
    saudacao();
    exibirDataHora();
    setTimeout(() => {
        atualizar();
    }, 1000);
}

function exibirDataHora() {
    divData.innerHTML = dataAtual();
    divMsg.innerHTML = `${horaAtual()}:${minutoAtual()}:${segundoAtual()}`;
}

function saudacao() {
    if(horaAtual() >= 6 && horaAtual() < 12) {
        // Dia
        alterarTitulo('Bom dia!');
        alterarImg('img/manha.jpg');
        corDeFundo('#536d8f');
    } else if(horaAtual() >= 12 && horaAtual() <= 18) {
        // Tarde
        alterarTitulo('Boa tarde!');
        alterarImg('img/tarde.jpg');
        corDeFundo('#b9846f');
    } else {
        // Noite
        alterarTitulo('Boa noite!');
        alterarImg('img/noite.jpg');
        corDeFundo('#505054');
    }
}

function corDeFundo(cor) {
    document.body.style.background = cor;
}

function alterarImg(caminho) {
    img.src = caminho;
}

function alterarTitulo(newTitulo) {
    titulo.innerHTML = newTitulo;
}

