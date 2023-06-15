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


const enrollForm = document.querySelector('.enroll__form')
const btnSubmit = document.querySelector('.btn__submit')
const enrollComplete = document.querySelector('.enroll__complete')

btnSubmit.addEventListener('click', () => {
    setTimeout(() => {
        enrollForm.style.display = 'none';
        enrollComplete.style.display = 'flex';
    }, 1000)
})


const popupOverlay = document.querySelector('.popup__overlay')
const formPopup = document.querySelector('.form__popup')
const closePopup = document.querySelector('.close__popup')
const btnOpened = document.querySelector('.btn__opened')

btnOpened.addEventListener('click', () => {
    popupOverlay.style.display = 'flex' 
    setTimeout(() => {
        popupOverlay.style.opacity = '1'
    }, 800)
})

closePopup.addEventListener('click', () => {
    popupOverlay.style.opacity = '0'
    setTimeout(() => {
        popupOverlay.style.display = ''
    }, 800)
})

const btnPopup = document.querySelector('.btn__popup')
const popupComplete = document.querySelector('.popup__complete')

btnPopup.addEventListener('click', () => {
    formPopup.style.display = 'none'
    setTimeout(() => {
        popupComplete.style.display = 'flex'
    }, 600)
})