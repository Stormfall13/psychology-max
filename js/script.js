const iconButger = document.querySelector('.icon__burger')
const iconClose = document.querySelector('.close__icon')
const wrappMenu = document.querySelector('.wrapp__menu')
const linkMenu = document.querySelectorAll('.link__menu')


iconButger.addEventListener('click', () => {
    wrappMenu.style.transform = 'translate(0vh)';
    wrappMenu.style.zIndex = '3';
    wrappMenu.style.position = 'fixed';
});
iconClose.addEventListener('click', () => {
    wrappMenu.style.transform = '';
    wrappMenu.style.zIndex = '';
    wrappMenu.style.position = '';
});
for (let linksMenu of linkMenu){
    linksMenu.addEventListener('click', () => {
        wrappMenu.style.transform = '';
        wrappMenu.style.zIndex = '';
        wrappMenu.style.position = '';
    });
}


function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {
    threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};