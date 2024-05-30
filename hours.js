//Criando função que será carregada pelo body, contendo a declaração das variaveis de execução do programa.
function carregar(){
    var horas = new Date();
    var horas_do_dia = horas.getHours()
    var minutos = horas.getMinutes()
    var informando_as_horas = window.document.querySelector('div#horas');
    var imagem_dinamica = window.document.querySelector('div#imagem');

    //Criando uma representação visual das horas na webpage.
    switch (minutos){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
            minutos = "0" + minutos;
            break;
        default:
            if (minutos < 10){
                minutos = "09"
            }
        break
    }
    informando_as_horas.innerHTML = (`Agora são ${horas_do_dia}h${minutos}.`);

    //Apresentando uma representação visual que muda dinamicamente conforme o horário do dia.
    if (horas_do_dia >= 12 && horas_do_dia < 18) {
        imagem_dinamica.innerHTML = (`<img src="imagens/oceano.png" width="300px">`);
        document.body.style.backgroundImage = "linear-gradient(to bottom right, #ffe66d, #ffaa00, #ff7b00, #ff5400)";
    }else if (horas_do_dia > 4 && horas_do_dia < 12) {
        imagem_dinamica.innerHTML = (`<img src="imagens/dia-nublado.png" width="300px">`);
    }else if (horas_do_dia >= 0 && horas_do_dia <= 4){
        imagem_dinamica.innerHTML = (`<img src="imagens/fases-da-lua.png" width="300px">`);
        document.body.style.backgroundImage = "linear-gradient(to bottom right, #ab51e3, #6818a5, #3c0663, #3d0066)";
    }else {
        imagem_dinamica.innerHTML = (`<img src="imagens/noite-nublada.png" width="300px">`);
        document.body.style.backgroundImage = "linear-gradient(to bottom right, #0466c8, #023e7d, #001845, #001233)";
    }
    //Função que atualiza a página a cada minuto que passa.
    function atualizar(){
        location.reload();
    }
    var intervalo_de_tempo = 60000;
    setInterval(atualizar, intervalo_de_tempo);
}


