let contador = 0;

setInterval( function(){
    document.getElementById('slide' + contador).checked = true;
    contador ++;

    if( contador > 9) {
        contador = 0;
    }

}, 3000);    