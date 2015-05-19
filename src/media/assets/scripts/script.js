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
            top: '10%'},
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
        
        $('.main-fixed #nav').animate({
            top: '75%'},
            1000);
        
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

        $('#back').show();
        $('#overview').css({left:'0'});
        $('#container').delay(1000).hide(0);
        $('#overview').css({position:'absolute'});
        $('#link-contact').removeClass('active');
        $('#link-realisation').removeClass('active');
        
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
            
            $('.main-fixed #nav').animate({
            top: '75%'},
            1000);
            
            $('#container').show();
            $('#overview').css({position:'fixed', left:'105%'});
            $('#contact').css({position:'fixed', top:'110%'});

            $('#link-contact').removeClass('active');
            $('#link-realisation').addClass('active');
            
            $('body').css('cursor','');

            $("#back-top").fadeOut(200);
			return false;
		});
    
    
    
    //Figure
    figure = $('figure.soixante-dix');
    figure.css('height', $(window).height() * 0.6);
    
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


});