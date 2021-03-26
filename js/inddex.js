function first() {
    var nav = [...document.querySelectorAll('.header__nav__side')]
    nav[0].classList.remove('item__order__active')
    nav[2].classList.remove('item__order__active')
    nav[3].classList.remove('item__order__active')

    nav[1].classList.add('item__order__active')
}

function second() {
    var nav = [...document.querySelectorAll('.header__nav__side')]
    var content_first = document.querySelector('.content_1')



    nav[0].classList.remove('item__order__active')
    nav[1].classList.remove('item__order__active')
    nav[3].classList.remove('item__order__active')

    nav[2].classList.add('item__order__active')
}

function three() {
    var nav = [...document.querySelectorAll('.header__nav__side')]
    nav[0].classList.remove('item__order__active')
    nav[1].classList.remove('item__order__active')
    nav[2].classList.remove('item__order__active')

    nav[3].classList.add('item__order__active')
}

function base() {
    var nav = [...document.querySelectorAll('.header__nav__side')]
    nav[1].classList.remove('item__order__active')
    nav[2].classList.remove('item__order__active')
    nav[3].classList.remove('item__order__active')

    nav[0].classList.add('item__order__active')
}