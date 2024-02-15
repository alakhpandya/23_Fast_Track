$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    items: 1,
    autoplay:true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    navText: ['<i class="fa-solid fa-arrow-left-long nav-arrow"></i>','<i class="fa-solid fa-arrow-right-long nav-arrow"></i>']
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:3
    //     },
    //     1000:{
    //         items:5
    //     }
    // }
})