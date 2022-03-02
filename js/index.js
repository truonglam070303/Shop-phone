

const openMenuTop = document.querySelector('.nav__hamburger')
const closeMenuTop =document.querySelector('.menu__top-header-close')
const menuTop = document.querySelector('.menu__top')
const overlay = document.querySelector('.overlay')

openMenuTop.addEventListener('click',function(){
    menuTop.classList.add('active')
    overlay.classList.add('active')
})

closeMenuTop.addEventListener('click',function(){
    menuTop.classList.remove('active')
    overlay.classList.remove('active')
})



// goto
const gotoUp = document.querySelector('.goto__top');
const navigation = document.querySelector('.navigation')
window.onscroll = function() {
    scrollToTop()
}
function scrollToTop() {
    if(document.body.scrollTop<60 || document.documentElement.scrollTop< 60){
       gotoUp.classList.add("show-goto__top")
       navigation.classList.remove('fixed-navigation')
    }
    if(document.documentElement.scrollTop>=60 || document.documentElement.scrollTop>=60)
    {
        navigation.classList.add('fixed-navigation')
        gotoUp.classList.remove("show-goto__top")
    }
}