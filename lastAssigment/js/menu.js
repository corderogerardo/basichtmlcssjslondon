$(document).ready(function(){
	  $('header').hide();

$(window).scroll(function() {

     if ( $(window).scrollTop() >= 640 && $(window).scrollTop() < $('#portefeuille').offset().top )  {

        $('header').show();
        $('header a').eq(1).addClass('activos');
        $('header a').eq(2).removeClass('activos');
        $('header a').eq(4).removeClass('activos');

    }else if($(window).scrollTop() >= $('#portefeuille').offset().top && $(window).scrollTop() < $('#contacter').offset().top){
    	$('header a').eq(2).addClass('activos');
 		$('header a').eq(1).removeClass('activos');
   	    $('header a').eq(4).removeClass('activos');

    }else if($(window).scrollTop() >= $('#contacter').offset().top){
    	$('header a').eq(4).addClass('activos');
 		$('header a').eq(1).removeClass('activos');
   	    $('header a').eq(2).removeClass('activos');

    }else {

        $('header').hide();

    }

});
});
