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
    $(function () {        
        $('#back a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 0);
            $("#back").hide();
            $('#container').show();
            $('#overview').css({position:'fixed', left:'105%'});
            $('body').css('cursor','');
            
            return false;
        });
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
    /*(function($){
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
                        var props = {position:'absolute'};
                        if (options.vertical) {
                             // var top = ($(options.inside).height() - $(this).outerHeight()) / 2;
                             var top = 50;
                             if (options.withScrolling) top += $(options.inside).scrollTop() || 0;
                             top = (top > options.minY ? top : options.minY);
                             $.extend(props, {top: top+'px'});
                        }
                        if (options.horizontal) {
                              // var left = ($(options.inside).width() - $(this).outerWidth()) / 2;
                              var left = $(options.inside).width()  / 2;
                              if (options.withScrolling) left += $(options.inside).scrollLeft() || 0;
                              left = (left > options.minX ? left : options.minX);
                              $.extend(props, {left: left+'px'});
                        }
                        if (options.transition > 0) $(this).animate(props, options.transition);
                        else $(this).css(props);
                        return $(this);
                   });
              }
         });
    })(jQuery);*/


    var next_move = "expand";
    var centerLayer = function(top,left){
        var css = {};
            if (next_move == "expand"){
                css = {
                    top : top+'%',
                    left: left+'%'
                };
                next_move = "shrink";
                $scene.parallax('disable');
            }else{
                css = {
                    top:0,
                    left:0
                };
                next_move = "expand";
                $scene.parallax('enable');
            }
            $('li.layer:nth-child(2)').animate(css, 500);
    }


    
    $('.illustrations h1').click(function () {
        // $('#container .parallax .scene .illustrations .ma_taille:nth-child(n+4)').css({display:'inline-block'});
        centerLayer('-17','-20');
        $('#container .parallax .scene .others_illustrations').show();
    });


    $('.logo h1').click(function () {
        // $('#container .parallax .scene .illustrations .ma_taille:nth-child(n+4)').css({display:'inline-block'});
        centerLayer('-5','6');

    });

    $('.site h1').click(function () {
        // $('#container .parallax .scene .illustrations .ma_taille:nth-child(n+4)').css({display:'inline-block'});
        centerLayer('0','43');

    });

    $('.packaging h1').click(function () {
        // $('#container .parallax .scene .illustrations .ma_taille:nth-child(n+4)').css({display:'inline-block'});
        centerLayer('-40','5');

    });

    $('.retouche h1').click(function () {
        // $('#container .parallax .scene .illustrations .ma_taille:nth-child(n+4)').css({display:'inline-block'});
        centerLayer('-40','27');

    });

    $('.miseenpage h1').click(function () {
        // $('#container .parallax .scene .illustrations .ma_taille:nth-child(n+4)').css({display:'inline-block'});
        centerLayer('-60','-15');

    });





});