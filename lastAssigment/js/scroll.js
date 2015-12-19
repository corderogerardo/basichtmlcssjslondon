//Smooth scroll found here: 
// https://css-tricks.com/snippets/jquery/smooth-scrolling/#comment-197181

$('a[href*=#]:not([href=#screenshot-carousel])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 750);
            return false;
        }
    }
});