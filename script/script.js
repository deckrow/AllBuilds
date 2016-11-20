(function($){
    $(document).ready(function(){
        var touch = $('.touchMenu');
        var menu = $('.nav');

        $(touch).on('click', function(){
            menu.slideToggle();
        });
        $(window).resize(function(){
            var wid = $(window).width();
            if(wid > 760 && menu.is(':hidden')){
                menu.removeAttr('style');
            }
        });

        var dropdown = $('.dropdown');
        var hid = $('.hid');

        $(dropdown).on('click', function(){
            hid.slideToggle();
        });


    });

    
    $(document).ready(function () {
        $('.accordion').children('li').on('click', function () {
            
            var id = $(this).attr('data-show');
            var div = $('.all-info-price');
            
            div.removeClass('active2');
            $('#' + id).addClass('active2');
            
            $('.accordion li p').removeClass('red');
            $(this).children('p').addClass('red');
        });
    });


    $(document).ready(function () {
        $(".accord .accord-header").click(function () {
            if($(this).next("div").is(":visible")){
                $(this).next("div").slideUp("slow");
            } else {
                $(".accord .accord-content").slideUp("slow");
                $(this).next("div").slideToggle("slow");
            }
        });
    });
})(jQuery);


