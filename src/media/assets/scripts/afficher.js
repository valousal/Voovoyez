
    // Fonction pour afficher les vignette avec l'animation
    $(document).ready(function () {
        random(0);
    });

// var visibilite = JQuery(monElement).is(:visible);


    var afficher = function(divClass, show){
        if (show == 'show'){
            var selector = "#container "+divClass;
            $(selector).css({'background-color':'#FFEFEF'}).delay(1000).show(0);
            var delay = 1100;
            var selector2 = "#container " + divClass + " div.ma_taille";
            $(selector2 +':hidden').slice( 0,15 ).each(function(){ 
                $(this).delay(delay).animate({ /*.delay(delay)*/
                    left:'0%',
                    top:'0%',
                    right:'0%',
                    bottom:'2%'
                },900).css({display:'inline-block'});

                $(selector2).slice( 0,5 ).css({display:'inline-block'});

                delay += 100;
            });
        }else { /*if(show =='no-show')*/
            random(900);
            var selector = "#container "+divClass;
            $(selector).css({background:'none'}).delay(900).fadeOut(200); 
            $(selector +' .ma_taille').not(selector +' a').delay(1200).hide(0);
        }


        //Button more
        $("#load").click(function(e){ // click event for load more
            e.preventDefault();
            var delay = 300;
            $("#container " + divClass + " div.ma_taille:hidden").slice( 0,5 ).each(function(){
                $(this).delay(delay).animate({ /*.delay(delay)*/
                    left:'0%',
                    top:'0%',
                    right:'0%',
                    bottom:'0%'
                },900);
            }).css({display:'inline-block'});    
            delay += 100;

            if($("#container " + divClass + " div.ma_taille:hidden").length == 0){ // check if any hidden divs still exist
                $("#load").hide(); // alert if there are none left
            }
        });
    }


