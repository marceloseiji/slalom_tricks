
//Coloca o link no card-player e nome da manobra
function linkPlayer (x, y) {
    link = x;
    manobraTitle = y;
    document.getElementById('card-player-iframe').setAttribute('src', link);
    document.getElementById('manobraTitle').innerHTML = manobraTitle;

};

function cardPlayerTitle (x){ //Coloca o título do card
    playerTitle = x;
    document.getElementById('card-player-title').innerHTML = playerTitle;
};

function cardPlayerColor(x) { //Coloca a cor do card
    cardColor = x;
    document.getElementById('card-player').setAttribute('class', cardColor)
};