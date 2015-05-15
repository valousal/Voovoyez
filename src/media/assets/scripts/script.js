$(document).ready(function () {
    
     $(window).resize(function(){
         //Width and height in css inline for balise ul#scene
        scene = $('#scene');
        scene.css('height', $(window).height());
        scene.css('width', $(window).width()) ;
         
        //Width and height in css inline for balise div#contact
        contact = $('#contact');
        contact.css('height', $(window).height());
        contact.css('width', $(window).width()) ;
        // contact.css('top', $(window).height()) ;
         
         
        //Width and height in css inline for balise div#overview
        overview = $('#overview');
        overview.css('height', $(window).height());
        overview.css('width', $(window).width()) ;
        // overview.css('left', '105%') ;
         
         
        //Width and height in css inline for balise li.layer
       /* layer = $('.layer');
        layer.css('width', '40%') ;*/
     });
        
    
    
    //Width and height in css inline for balise ul#scene
    scene = $('#scene');
    scene.css('height', $(window).height());
    scene.css('width', $(window).width()) ;
    
    
    
    //Width and height in css inline for balise div#contact
    contact = $('#contact');
    contact.css('height', $(window).height());
    contact.css('width', $(window).width()) ;
    contact.css('top', '110%') ;
    
    
    //Width and height in css inline for balise div#overview
    overview = $('#overview');
    overview.css('height', $(window).height());
    overview.css('width', $(window).width()) ;
    overview.css('left', '105%') ;
    
    
    //verification position menu si refresh sur contact
    if($(window).scrollTop() > 0){
        $('.main-fixed #nav').animate({
            top: '10%'},
            1000);
        $('#link-contact').addClass('active');
    }else{
         $('#link-contact').removeClass('active');
        $('#link-realisation').addClass('active');
    }
    


    //scroll div contact 
    $('#link-contact').click(function(){
        /*$('html, body').animate({
            scrollTop: $('#contact').offset().top},
            900);*/
        $('#contact').css({top:'0'});
        $('#container').hide();
        $('#contact').css({position:'absolute'});
        $('#overview').css({position:'fixed', left:'105%'});

        $('.main-fixed #nav').animate({
            top: '10%'},
            1000);
        
        $('#link-contact').addClass('active');
        $('#link-realisation').removeClass('active');
        
        $('body').css('cursor','default');

        $('#back').hide();

    });
    
    
    
    //scroll div realisations 
    $('#link-realisation').click(function(){
        $('html, body').animate({
            scrollTop: 0,
            scrollLeft: 0},
            0);
        
        $('.main-fixed #nav').animate({
            top: '75%'},
            1000);
        
        $('#container').show();
        $('#overview').css({position:'fixed', left:'105%'});
        $('#contact').css({position:'fixed', top:'110%'});

        $('#link-contact').removeClass('active');
        $('#link-realisation').addClass('active');

        $('#back').hide();

    });
    
    
     //scroll div overview 
    $('.info').click(function(){
        $('html, body').animate({
            scrollTop: 0,
            /*scrollLeft : $(window).width()*/},
            0);

        $('#back').show();
        $('#overview').css({left:'0'});
        $('#container').hide();
        $('#overview').css({position:'absolute'});
        $('#link-contact').removeClass('active');
        $('#link-realisation').removeClass('active');
        
        $('body').css('cursor','default');
    });
    
    
    $("#back").hide();
    // scroll container depuis overview       
    $('#back a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 0);
        $("#back").hide();
        $('#container').show();
        $('#overview').css({position:'fixed', left:'105%'});
        $('body').css('cursor','');
        $('#link-realisation').addClass('active');
        
        return false;
    });
    
    
    
    //back-top with button
    // hide #back-top first
	$("#back-top").hide();
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 900);
            
            $('.main-fixed #nav').animate({
            top: '75%'},
            1000);
            
            $('#link-contact').removeClass('active');
            $('#link-realisation').addClass('active');
            
            $('body').css('cursor','');
			return false;
		});
	});
    
    
    
    
    
    //map 
    // create a map in the "map" div, set the view to a given place and zoom
    var map = L.map('map').setView([48.285763, 6.940211], 13);

    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // add a marker in the given location, attach some popup content to it and open the popup
    L.marker([48.285763, 6.940211]).addTo(map)
        .bindPopup("57 Rue d'Hellieule <br> 88100 Saint-Dié-des-Vosges")
        .openPopup();
    
    /*map = $('#map');
    map.css('width', $(window).width() / 3);
    map.css('height', $(window).height() / 2);*/

    
    
    
    //Figure
    figure = $('figure.soixante-dix');
    figure.css('height', $(window).height() * 0.6);
    


    //afficher grid pour chaque theme, titre cliquable
    (function($){
         $.fn.extend({
              center: function (options) {
                   var options =  $.extend({ // Default values
                        inside:window, // element, center into window
                        transition: 300, // millisecond, transition time
                        minX:0, // pixel, minimum left element value
                        minY:0, // pixel, minimum top element value
                        withScrolling:true, // booleen, take care of the scrollbar (scrollTop)
                        vertical:true, // booleen, center vertical
                        horizontal:true // booleen, center horizontal
                   }, options);
                   return this.each(function() {
                        var props = {position:'relative'};
                        if (options.vertical) {
                             var top = ($(options.inside).height() - $(this).outerHeight()) / 2;
                             // var top = 50;
                             if (options.withScrolling) top += $(options.inside).scrollTop() || 0;
                             top = (top > options.minY ? top : options.minY);
                             $.extend(props, {top: top+'px'});
                        }
                        if (options.horizontal) {
                              var left = ($(options.inside).width() - $(this).outerWidth()) / 2;
                              // var left = $(options.inside).width()  / 2;
                              if (options.withScrolling) left += $(options.inside).scrollLeft() || 0;
                              left = (left > options.minX ? left : options.minX);
                              $.extend(props, {left: left+'px'});
                        }
                        if (options.transition > 0){
                            $(this).animate(props, options.transition);
                        }else{
                            $(this).css(props);
                        }

                        //disable parallax
                        $scene.parallax('disable');

                        // Button close
                        $('.close').show().css({position:'absolute',top:'10px',left:'10px',cursor:'pointer'});

                        //deplacer autre div theme
                        var position = $(this).position();
                        $(this).siblings().each(function(){
                            var topAfter = $(this).position().top + (top - position.top);
                            var leftAfter = $(this).position().left + (left - position.left);
                            $(this).animate({top:topAfter,left:leftAfter},options.transition);
                        });
                        
                        // Return
                        return $(this);
                   });
              }
         });
    })(jQuery);


    /*var next_move = "expand";
    var centerLayer = function(top,left){
        var css = {};
            if (next_move == "expand"){
                // console.log(($(window).height() - $('li.layer:nth-child(2)').outerHeight()) / 2);
                css = {
                    // top : top+'%',
                    top: ($(window).height() - $('li.layer:nth-child(2)').outerHeight()) / 2,
                    left: left+'%'
                };
                next_move = "shrink";
                // stop parallax
                $scene.parallax('disable');
                // opacity background

                // button close
                // $('#container').prepend('<i class="fa fa-times fa-2x close"></i>');
                $('.close').show().css({position:'absolute',top:'10px',left:'10px',cursor:'pointer'});
            }else{
                css = {
                    top:0,
                    left:0
                };
                next_move = "expand";
                $scene.parallax('enable');
            }
            $('li.layer:nth-child(2)').animate(css, 500);
    }*/


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


    // Fonction pour afficher les vignette avec l'animation
    random(0);
    var afficher = function(divClass, show){
        if (show == 'show'){
            var selector = "#container "+divClass;
            $(selector).show();
            var delay = 0;
            var selector2 = "#container " + divClass + " div.ma_taille";
            $(selector2).each(function(){ 
                $(this).animate({ /*.delay(delay)*/
                    left:'0%',
                    top:'0%',
                    right:'0%',
                    bottom:'0%'
                },900);

                $(this).css({display:'inline-block'});
                // delay += 500;
            });
        }else { /*if(show =='no-show')*/
            random(900);
            var selector = "#container "+divClass;
            $(selector).delay(900).hide(0); 
            $(selector +'> *').delay(900).hide(0);
        }
    }

    $('.illustrations h1').click(function () {
        // centerLayer('-31','-31');
        $('.illustrations').center();
        afficher('.others_illustrations', 'show');
    });


    $('.logo h1').click(function () {
        // centerLayer('-35','-5');
        $('.logo').center();

    });

    $('.site h1').click(function () {
        // centerLayer('-65','-3');
        $('.site').center();

    });

    $('.packaging h1').click(function () {
        // centerLayer('-60','-41');
        $('.packaging').center();
    });

    $('.retouche h1').click(function () {
        // centerLayer('-8','22');
        $('.retouche').center();
    });

    $('.miseenpage h1').click(function () {
        // centerLayer('-30','32');
        $('.miseenpage').center();
    });


    $('.close').click(function () {
        $('li.layer:nth-child(2) > div').each(function(){
            $(this).removeAttr( 'style' );
        });
        afficher('.others','no-show');
        $(this).hide();
        $scene.parallax('enable');
    });


});