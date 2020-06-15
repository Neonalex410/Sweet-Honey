var nav_button = document.querySelectorAll('header li'),
    page       = document.querySelectorAll('.content > div'),
    slogan     = document.querySelectorAll('.main > span'),
    rub_div    = document.querySelector('.calculator span'),
    minus      = document.querySelector('.calc-bar > div:nth-child(1)'),
    litr_div   = document.querySelector('.calc-bar > div:nth-child(2)'),
    plus       = document.querySelector('.calc-bar > div:nth-child(3)'),
    slider     = document.querySelectorAll('.slider > img'),
    radio      = document.querySelectorAll('.slider-radio > div');

rub   = 500;
litr  = 1;
slide = 0;

rub_div.innerHTML = rub;

nav_button[0].addEventListener('click', () => {
    if (!nav_button[0].classList.contains('active')) {
        nav_button[0].classList.add('active')
        nav_button[1].classList.remove('active')
        nav_button[2].classList.remove('active')
        nav_button[3].classList.remove('active')
        page[0].classList.add('active')
        page[1].classList.remove('active')
        page[2].classList.remove('active')
        page[3].classList.remove('active')
    }
})

nav_button[1].addEventListener('click', () => {
    if (!nav_button[1].classList.contains('active')) {
        nav_button[0].classList.remove('active')
        nav_button[1].classList.add('active')
        nav_button[2].classList.remove('active')
        nav_button[3].classList.remove('active')
        page[0].classList.remove('active')
        page[1].classList.add('active')
        page[2].classList.remove('active')
        page[3].classList.remove('active')
    }
})

nav_button[2].addEventListener('click', () => {
    if (!nav_button[2].classList.contains('active')) {
        nav_button[0].classList.remove('active')
        nav_button[1].classList.remove('active')
        nav_button[2].classList.add('active')
        nav_button[3].classList.remove('active')
        page[0].classList.remove('active')
        page[1].classList.remove('active')
        page[2].classList.add('active')
        page[3].classList.remove('active')
    }
})

nav_button[3].addEventListener('click', () => {
    if (!nav_button[3].classList.contains('active')) {
        nav_button[0].classList.remove('active')
        nav_button[1].classList.remove('active')
        nav_button[2].classList.remove('active')
        nav_button[3].classList.add('active')
        page[0].classList.remove('active')
        page[1].classList.remove('active')
        page[2].classList.remove('active')
        page[3].classList.add('active')
    }
})

setInterval(() => {
    slogan[0].classList.toggle('active');
    slogan[1].classList.toggle('active');
}, 5000)

minus.addEventListener('click', () => {
    if (litr > 0) {
        litr--;
        rub -= 500;
        litr_div.innerHTML = litr + ' л';
        rub_div.innerHTML = rub;
    }
})

plus.addEventListener('click', () => {
    litr++;
    rub += 500;
    litr_div.innerHTML = litr + ' л';
    rub_div.innerHTML = rub;
})

setInterval(() => {
    if (slide == 3) {
        slider[slide].classList.toggle('active');
        slider[0].classList.toggle('active');
        radio[slide].classList.toggle('active');
        radio[0].classList.toggle('active');
        slide = 0;
    } else {
        slider[slide].classList.toggle('active');
        slider[slide + 1].classList.toggle('active');
        radio[slide].classList.toggle('active');
        radio[slide + 1].classList.toggle('active');
        slide++;
    }
}, 5000)
