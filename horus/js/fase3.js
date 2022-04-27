let vida = 3

function pertunta() {
    var resposta = prompt("Digite a sua resposta!");
    for (var vida = 0; vida < 2; vida++) {
        if (resposta == "estrela" || resposta == "ESTRELA" || resposta == "estrelas" || resposta == "ESTRELAS") {
            window.location.href = "../vitoria.html";
        } else {
            vida - 1
            alert(`Errado! Não se preocupe, tente novamente. Este é o seu ${vida + 1}° erro`);

            resposta = prompt("Digite a sua resposta!");
        }
    }
    if (resposta == "estrela" || resposta == "ESTRELA" || resposta == "estrelas" || resposta == "ESTRELAS") {
        window.location.href = "../vitoria.html";
    } else {

        window.location.href = "../game_over.html";
    }
}