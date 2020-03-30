const menu = $('.menu')
const header = document.getElementsByClassName('header-btn')[0]
const slider = $('.slider')
const menuBtn = $('.header-btn')
const menuBtnTopRow = $('.header-btn__1')
const menuBtnCenterRow = $('.header-btn__2')
const menuBtnButtonRow = $('.header-btn__3')

$(function(){
    slider.slick({
        arrows: false, 
        fade: true,
        autoplay: 2000,
        dots:true
    })
});

header.addEventListener('click', (e)=>{
    if (menuBtnCenterRow.hasClass('hidden') | menuBtnCenterRow.hasClass('visible'))
    {
        menuBtnCenterRow.toggleClass('visible')
        menu.toggleClass('hidden-SLIDE')
    }
    menu.toggleClass('visible-SLIDE')
    menuBtn.toggleClass('header-btn-close')
    menuBtnTopRow.toggleClass('header-btn__1-close')
    menuBtnButtonRow.toggleClass('header-btn__3-close')
    menuBtnCenterRow.toggleClass('hidden')
});