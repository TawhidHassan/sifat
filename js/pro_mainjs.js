$(window).scroll(function () {
    var wScroll=$(this).scrollTop();
    $('.logo h1').css({
       'transform' :'translate(0px, '+ wScroll+'%)'
    });
    $('.back-bird').css({
       'transform' :'translate(0px, '+ wScroll/4+'%)'
    });
    $('.fore-bird').css({
        'transform' :'translate(0px, -'+ wScroll/20+'%)'
    });

    // ----------------------------------------------------
    // about section
    // my png pic about section animation
    if(wScroll > $('.about_section').offset().top-($(window).height()/1.4)){
        // my  about section header title animation
        $('.about-header h1').css({
            'transform' :'translateX(0%)'
        });
        $('.about-header h2').css({
            'transform' :'translateX(0%)'
        });

        $('.my_discription_photo img').each(function (i) {
            setTimeout(function () {
                $('.my_discription_photo img').eq(i).addClass('is-showing');
            }, 250*(i+1));

        });
    }

    });
