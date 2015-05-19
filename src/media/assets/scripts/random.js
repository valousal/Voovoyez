// On renvoie un nombre aléatoire entre une valeur min (incluse) 
    // et une valeur max (exclue)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // sortir de l'écran les autres vignettes pour ensuite les afficher avec l'animation
    var random = function(vitesse){
        var i = 0;
        $('#container .others div.ma_taille').each(function(){ /*:lt(16)*/
            if (i == 0) {
                $(this).animate({
                    left: getRandomInt(100,300)+'%',
                    top: getRandomInt(100,300)+'%',
                },vitesse);
            }
            else if (i == 1) {
                $(this).animate({
                    left: getRandomInt(-100,-300)+'%',
                },vitesse);
            }
            else if (i == 2) {
                $(this).animate({
                    left: getRandomInt(100,300)+'%', 
                    top: getRandomInt(-100,-300)+'%',
                },vitesse);
            }
            else if (i == 3) {
                $(this).animate({
                    bottom: getRandomInt(-100,-300)+'%',
                    left: getRandomInt(100,300)+'%',
                },vitesse);
                i = -1;
            }else{
                $(this).animate({
                    left: getRandomInt(100,300)+'%',
                    top: getRandomInt(100,300)+'%',
                },vitesse);
            }
            i++;
        });
    }

    