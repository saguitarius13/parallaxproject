$(window).scroll(function() {
    parallax();
})

function parallax() {
    
    var wScroll = $(window).scrollTop();
    
    $('.bgparallax').css('background-position', 'center '+(wScroll*0.6)+'px')
    
}
