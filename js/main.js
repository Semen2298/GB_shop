/* HAMBURGER */

$('.menu__btn').on('click',function(){
    $('.hamburger-menu').toggle();
})

$('.sub').on('click',function(){
    $('.sub-mobil').toggle();
})

$('#closeMenu').on('click',function(){
    $('.hamburger-menu').hide();
});

$('.mobile_menu-tab').on('click',function(){
    $('#burger-tabs').toggle();
})