//Mostra os botões do tipo de manobra selecionada

function escondeManobras () {
    $("#manobras_show_forwardsBackwards_e").css("display", "none");
    $("#manobras_show_othersManobras_e").css("display", "none");
    $("#manobras_show_jumps_e").css("display", "none");
    $("#manobras_show_spins_e").css("display", "none");
    $("#manobras_show_sitting_e").css("display", "none");
}

function mostraManobras (id) {

    escondeManobras();

    if (id == 'Forwards-Backwards') {
        $("#manobras_show_forwardsBackwards_e").css("display", "initial");
    };

    if (id == 'Others') {
        $("#manobras_show_othersManobras_e").css("display", "initial");
    };

    if (id == 'Jumps') {
        $("#manobras_show_jumps_e").css("display", "initial");
    };

    if (id == 'Spins') {
        $("#manobras_show_spins_e").css("display", "initial");
    };

    if (id == 'Sitting') {
        $("#manobras_show_sitting_e").css("display", "initial");
    };
    
};