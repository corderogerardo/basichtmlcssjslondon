$(document).ready(function(){
            $("#infoModal").modal('toggle');

            $("#help_id").click(function(){
                    $("#infoModal").modal('toggle');
            });
            $("#login_id").click(function(){
                    $("#loginModal").modal('toggle');
            });
$(window).scroll(function() {

     if ( $(window).scrollTop() >= 600 && $(window).scrollTop() < $('#work').offset().top )  {
        $('.menuHeader li').eq(0).addClass('active');
        $('.menuHeader li').eq(1).removeClass('active');
        $('.menuHeader li').eq(3).removeClass('active');

    }else if($(window).scrollTop() >= $('#work').offset().top && $(window).scrollTop() < $('#contact').offset().top){
    	   $('.menuHeader li').eq(1).addClass('active');
 	   $('.menuHeader li').eq(0).removeClass('active');
   	   $('.menuHeader li').eq(3).removeClass('active');

    }else if($(window).scrollTop() >= $('#contact').offset().top){

    	$('.menuHeader li').eq(3).addClass('active');
 	$('.menuHeader li').eq(0).removeClass('active');
   	$('.menuHeader li').eq(1).removeClass('active');

    }

});
});
