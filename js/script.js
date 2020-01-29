var typed = new Typed ('#textedefil',{
    strings:[" Graphic Designer", "Mother of Rats", "Shrek Addict"],typeSpeed:30,loop:true
})

$ (document).ready(function(){
    $(".owl-carousel").owlCarousel({items:1,});
});

$(function() {    
    $.scrollIt({        
        easing: 'ease', 
        scrollTime: 1000,
        topOffset: 0    
    });});