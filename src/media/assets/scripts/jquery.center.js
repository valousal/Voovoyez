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
                        var props = {position:'absolute'};
                        if (options.vertical) {
                             var top = ($(options.inside).height() - $(this).outerHeight()) / 10;
                             // var top = ($(options.inside).height()) / 20;
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


  var next_move = "expand";
    var centerLayer = function(top,left,divOthers){
        var css = {};
            if (next_move == "expand"){
                // console.log(($(window).height() - $('li.layer:nth-child(2)').outerHeight()) / 2);
                css = {
                    top : top+'%', //%
                    left: left+'%'
                };

                next_move = "shrink";
                // stop parallax
                $scene.parallax('disable');
                // opacity background

                // button close
                $('.close').show();

                // button more
                $("#load").show();

                //afficher
                afficher(divOthers, 'show');
                // window.setTimeout(afficher(divOthers,'no-show'), 1000);

                //Overlay
                $('#overlay').fadeIn(200);

                //nav z-index
                $('#container').css('z-index', 'auto');


            }else{
                css = {
                    top:0,
                    left:0
                };
                next_move = "expand";
                
                //enable parallax
                $scene.parallax('enable');

                //afficher
                // setTimeout(afficher('.others','no-show'), 1000);
                afficher('.others','no-show');

                // button close
                $('.close').hide();

                // Overlay
                $('#overlay').fadeOut(200);

                // button more
                $("#load").hide();

                // nav z-index
                 $('#container').css('z-index', '-1002');
            }
            $('li.layer:nth-child(2)').animate(css, 500);
    }