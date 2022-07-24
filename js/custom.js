// navbar section start
let menu = document.querySelector('#menu-btn'); 
let navbar = document.querySelector('.header .navbar');
menu.onclick=()=>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}
// jquery.animatedheadline code
    $('.animate-scale').animatedHeadline({
        animationType: 'scale'
    });
// owlCarousel
$(document).ready(function(){
  var owl = $('.owl-carousel');
	owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:false,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
});