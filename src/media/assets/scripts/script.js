$(document).ready(function () {
    
     $(window).resize(function(){
         //Width and height in css inline for balise ul#scene
         //Width and height in css inline for balise div#overview
        scene = $('#scene');
        overview = $('#overview');
        if($(window).width() > 480){
            scene.css('height', $(window).height());
            scene.css('width', $(window).width()) ;
            overview.css('height', $(window).height());
            overview.css('width', $(window).width()) ;
            $scene.parallax('enable');

        }else{
            scene.css('height', $(window).height() - 100);
            scene.css('width', $(window).width()) ;
            overview.css('height', $(window).height() - 100);
            overview.css('width', $(window).width()) ;
            $scene.parallax('disable');
        }
         
        //Width and height in css inline for balise div#contact
        contact = $('#contact');
        contact.css('height', $(window).height());
        contact.css('width', $(window).width()) ;
        // contact.css('top', $(window).height()) ;

        
     });

    //Figure
    figure = $('figure.soixante-dix');
    figure.css('height', $(window).height() * 0.6);
        
    if($(window).width() < 480){
        $scene.parallax('disable');
     }
    
    //Width and height in css inline for balise ul#scene
    scene = $('#scene');
    if($(window).width() > 480){
        scene.css('height', $(window).height());
        scene.css('width', $(window).width()) ;
    }else{
        scene.css('height', $(window).height() - 100);
        scene.css('width', $(window).width()) ;
    }
    
    
    
    //Width and height in css inline for balise div#contact
    contact = $('#contact');
    contact.css('height', $(window).height());
    contact.css('width', $(window).width()) ;
    contact.css('top', '110%') ;
    
    
    //Width and height in css inline for balise div#overview
    overview = $('#overview');
    if($(window).width() > 480){
        overview.css('height', $(window).height());
        overview.css('width', $(window).width()) ;
    }else{
        overview.css('height', $(window).height() - 100);
        overview.css('width', $(window).width()) ;
    }
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
    

    $("#back-top").hide();

    //scroll div contact 
    $('#link-contact').click(function(){
        /*$('html, body').animate({
            scrollTop: $('#contact').offset().top},
            900);*/
        $('#contact').css({top:'0'});
        $('#container').delay(1000).hide(0);
        $('#contact').css({position:'absolute'});
        $('#overview').css({position:'fixed', left:'105%'});
        
        $('.main-fixed #nav').animate({
            top: '40'},
        1000);
        
        
        $('#link-contact').addClass('active');
        $('#link-realisation').removeClass('active');
        
        $('body').css('cursor','default');

        $('#back').hide();

        $("#back-top").fadeIn(200);

    });
    
    
    
    //scroll div realisations 
    $('#link-realisation').click(function(){
        $('html, body').animate({
            scrollTop: 0,
            scrollLeft: 0},
            0);
        
        if($(window).width() > 480){
            $('.main-fixed #nav').animate({
                top: '75%'},
                1000);
        }else{
            $('.main-fixed #nav').animate({
                top: '20'},
                1000);
        }
        
        
        $('#container').show();
        $('#overview').css({position:'fixed', left:'105%'});
        $('#contact').css({position:'fixed', top:'110%'});

        $('#link-contact').removeClass('active');
        $('#link-realisation').addClass('active');
        
        $('#back').hide();

        $("#back-top").hide();
    });
    
    
     //scroll div overview 
    $('.info').click(function(){
        $('html, body').animate({
            scrollTop: 0,
            /*scrollLeft : $(window).width()*/},
            0);

        if($(window).width() > 480){
            $('#back').delay(500).fadeIn(200);
        }
        
        $('#overview').css({position:'absolute',left:'0', top:'100'});
        $('#contact').css({position:'fixed'});
        $('#container').delay(1000).hide(0);
        $('#link-contact').removeClass('active');
        $('#link-realisation').removeClass('active');
        
        $('.others_illustrations').css({zIndex:1400});
        //Overlay
        // $('#overlay').fadeOut(200);
        
        $('body').css('cursor','default');

        $("#back-top").hide();
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
        $('.others_illustrations').delay(800)
                                    .queue(function (next) { 
                                        $(this).css({zIndex:1700});
                                        next();
                                    });
        // $('.others_illustrations').delay(300).fadeIn(300);
        
        return false;
    });
    
    
    
    //back-top with button
    // hide #back-top first
	
	// fade in #back-top
		// $(window).scroll(function () {
		// 	if ($(this).scrollTop() > 300) {
		// 		$('#back-top').fadeIn();
		// 	} else {
		// 		$('#back-top').fadeOut();
		// 	}
		// });

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 900);
            
            if($(window).width() > 480){
                $('.main-fixed #nav').animate({
                    top: '75%'},
                    1000);
            }else{
                $('.main-fixed #nav').animate({
                    top: '20'},
                    1000);
            }
            
            $('#container').show();
            $('#overview').css({position:'fixed', left:'105%'});
            $('#contact').css({position:'fixed', top:'110%'});

            $('#link-contact').removeClass('active');
            $('#link-realisation').addClass('active');
            
            $('body').css('cursor','');

            $("#back-top").fadeOut(200);
			return false;
		});
    
    //random thumb
    // random(0);
    $('.illustrations h1').click(function () {
        
        // $('li.layer:nth-child(2)').attr('data-depth','0.00');
        // $scene.parallax('disable');
        // $('li.layer:nth-child(2)').delay(900).translate3d();

        if((1000 < $(window).width()) && ($(window).width() < 1300)){
            centerLayer('-21','-31','.others_illustrations');
        }else if ((1300 < $(window).width()) && ($(window).width() < 1600)){ //(1300 < $(window).width() < 1600)
            centerLayer('-31','-31','.others_illustrations');
        }else if((800 < $(window).width()) && ($(window).width() < 1000)){
            centerLayer('-26','-31','.others_illustrations');
        }else{
             centerLayer('-31','-31','.others_illustrations');
        }

    });


    $('.logo h1').click(function () {
        centerLayer('-35','-5');
        // $('.logo').center();

    });

    $('.site h1').click(function () {
        centerLayer('-65','-3');
        // $('.site').center();

    });

    $('.packaging h1').click(function () {
        centerLayer('-60','-41');
        // $('.packaging').center();
    });

    $('.retouche h1').click(function () {
        centerLayer('-8','22');
        // $('.retouche').center();
    });

    $('.miseenpage h1').click(function () {
        centerLayer('-30','32');
        // $('.miseenpage').center();
    });


    $('.close').click(function () {
        /*$('li.layer:nth-child(2) > div').each(function(){
            $(this).removeAttr( 'style' );
        });*/
        // afficher('.others','no-show');

        next_move = "shrink";
        centerLayer();
    });



    // Hover mobile
    $('.view-first:hover .mask').on("touchstart", function (e) {
        "use strict"; //satisfy the code inspectors
        var link = $(this); //preselect the link
        if (link.hasClass('hover')) {
            return true;
        } else {
            link.addClass("hover");
            $('.view-first:hover .mask').not(this).removeClass("hover");
            e.preventDefault();
            return false; //extra, and to make sure the function has consistent return points
        }
    });

});