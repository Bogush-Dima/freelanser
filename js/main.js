$(function(){

    $('.header-nav__btn').on('click', function(){
        $('.header-nav__items').slideToggle()
    });

    new WOW({
        mobile:false,
    }).init();
})