function toggle(toggleId, navId) {
    const toggle = document.getElementById(toggleId);
    const navMenu = document.getElementById(navId);

    if (toggle && navMenu) {
        toggle.addEventListener('click', () => {
            navItemAnimation()
            navMenu.classList.toggle('show__menu');
            toggle.classList.toggle('close');
        })
    }
}

toggle('toggler', 'nav__menu');

// ======== HERO IMAGE PARALLAX EFFECT ===========

// ======= HEADER STICKY =========
const scrollBtn = document.querySelector('.scroll');
const header = document.querySelector('.header');
const heroImg = document.querySelector('.about__left');

window.addEventListener('scroll', () => {
    const value = window.scrollY;
    if (value > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky')
    }

    if (value > 100) {
        scrollBtn.style.display = 'none'
    } else {
        scrollBtn.style.display = 'block'
    }

    heroImg.style.top = `${200 - value * 0.4}px`;

    
})

// ========== MOBILE RESPONSIVE LINK REMOVE ===========
const links = document.querySelectorAll('.nav__link');

function linkAction() {
    // const links = document.querySelectorAll('.nav__link');
    const menu = document.querySelector('.nav__menu');
    const toggle = document.querySelector('.nav__bar-toggle');

   
    
    links.forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('show__menu');
            toggle.classList.remove('close');
            reset(links);
            link.classList.add('active');
        })
    })

   
}


function reset(links){
    links.forEach((link) => {
        link.classList.remove('active');
    })
}

linkAction()


function navItemAnimation() {
    const navLink = document.querySelectorAll('.nav__link');
    navLink.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `linkFadeIn .3s ease forwards ${index / 6 }s`
        }
    })
}


// ========== MODAL ==========

const videoIcon = document.querySelector('.hero__video');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close');

videoIcon.addEventListener('click', () => {
    modal.style.display = 'block'
})
modalCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})


// ============ HERO SECTION RIPPLES EFFECT ================
$('.hero').ripples({
    dropRadius: 20,
    perturbance: 0.03,
    // interactive:true
  });
$('.about__left').ripples({
    dropRadius: 20,
    perturbance: 0.03,
    // interactive:true
  });

//   ========== TYPED EFFECT ==========
  var typed = new Typed('.typing', {
    // Waits 1000ms after typing "First"
      strings: ['web developer. ^800','web designer. ^800', 'freelancer. ^800', 'self motivator. ^800'],
      typeSpeed: 30,
      backSpeed: 20,
      loop: true,
      cursorChar: '❤',
  });


const progressBars = document.querySelectorAll('.skills__inner');

function showProgress() {
    progressBars.forEach((progressBar, index) => {
        const value = progressBar.dataset.width;
        progressBar.style.width = `${value}%`;
        progressBar.style.transitionDelay = `${index * 100}ms`
        progressBar.style.transition = `${(index + 1) * 1000}ms`
    })
}
function resetProgress() {
    progressBars.forEach((progressBar, index) => {
        progressBar.style.width = 0;
    })
}


const section = document.querySelector('.skills');

const winHeight = window.innerHeight;
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (section.offsetTop < scrollTop + winHeight / 2) {
        showProgress();
    } else {
        resetProgress();
    }
})



let scrollProgress = document.querySelector('.progress__bar');
const social__box = document.querySelector('.social')
function showProgressBar() {
    let pos = document.documentElement.scrollTop;
    let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrollValue = Math.round(pos * 100 / totalHeight);
    scrollProgress.style.background = `conic-gradient(#08D565 ${scrollValue}%,#0B0D0C ${scrollValue}%)`;

}
window.addEventListener('scroll', () => {
    const top = window.scrollY;
    showProgressBar()
    
    if (top > 20) {
        scrollProgress.classList.add('progress__show');
    } else {
        scrollProgress.classList.remove('progress__show');
    }

    if (top > 100) {
        social__box.classList.add('active');
    } else {
        social__box.classList.remove('active');
    }
})

scrollProgress.addEventListener('click', () => {
    window.scrollTo(0,0);
})



// TODO: PORTFOLIO 

const btns = document.querySelectorAll('.btn__item');
const imgBox = document.querySelectorAll('.img__box');

btns.forEach((btn) =>{
    btn.addEventListener('click', () => {
        reset(btns);
        btn.classList.add('active');

        let filterData = btn.getAttribute('data-name');

        imgBox.forEach((imgB) => {
            imgB.classList.remove('show');
            imgB.classList.add('hide');

            if (imgB.getAttribute('data-filter') === filterData || filterData === 'all') {
                imgB.classList.remove('hide');
                imgB.classList.add('show')
            }
        })
        
    })
})

function reset(btn) {
    btn.forEach((b) => {
        b.classList.remove('active');
    })
}




// TODO: COUNTER 

const numbers = document.querySelectorAll('.count__number');


let speed = 10;
numbers.forEach((num) => {
    let point = 0;

    let counter = () => {
        let value = num.getAttribute("data-num");
        num.innerHTML = point + '+'
        if (value == point) {
            clearInterval(counter)
        } else {
            point += 1;
        }
    }

    
    // sectionObserver
     const counterSection = document.querySelector('.counter');

     let options = {
         rootMargin: '0px 0px -200px 0px',
    }
    

     const sectionObserver = new IntersectionObserver(function (entries) {
         if (entries[0].isIntersecting) {
             setInterval(counter, speed);

         }
     
     }, options)
    
        sectionObserver.observe(counterSection)
})


// TODO: PORTFOLIO MODAL 

const portfolioImg = document.querySelectorAll('.portfolio__img');
const zoomIcon = document.querySelectorAll('.zoom__icon');
const portfolioModal = document.querySelector('.portfolio__modal')
const portfolioModalClose = document.querySelector('.portfolio__close')


zoomIcon.forEach((icon) => {
    const img = icon.parentNode;
    const parent = img.parentNode
    const mainImg = parent.querySelector('.portfolio__img');

    icon.addEventListener('click', () => {

        const modalImg = document.querySelector('.modal__img')
        portfolioModal.classList.remove('modal__hide');
        portfolioModal.classList.add('modal__show');
        modalImg.src = mainImg.src;
    })
})

portfolioModalClose.addEventListener('click', () => {
    portfolioModal.classList.remove('modal__show');
    portfolioModal.classList.add('modal__hide');
})



// TODO: REVIEW SLIDE 

const slideBtns = document.querySelectorAll('.slide__icon')
const sliders = document.querySelectorAll('.slider');

let i = 0;

function timing() {
    sliders[i].classList.remove('slide__active');
    i = (i + 1) % sliders.length;
    sliders[i].classList.add('slide__active');
}



setInterval(timing, 5000);

let index = 0;
function prev_next_action(e) {
    if (e.target.classList.contains('prev')) {
        sliders[index].classList.remove('slide__active');
        if (index === 0) {
            index = sliders.length
        }
        sliders[index - 1].classList.add('slide__active');
        index--;

    } else {
        sliders[index].classList.remove('slide__active');
        if (index === sliders.length - 1) {
            index = -1;
        }
        sliders[index + 1].classList.add('slide__active');
        index++
    }
}

slideBtns.forEach((btn) => {
    btn.addEventListener('click', prev_next_action)
})










// ================ INPUT ANIMATION ==================
const labels = document.querySelectorAll('.form__label');

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split('').map((letter, index) => `<span style="transition-delay:${index * 70}ms">${letter}</span>`).join('');
})


// =========== cursor ============
const cursor = document.querySelector('.cursor');
// const links = document.querySelectorAll('.nav__link');

window.addEventListener('mousemove', cursorMove);

function cursorMove(e) {
    let xAxis = e.clientX;
    let yAxis = e.clientY;
    cursor.style.top = yAxis + 'px';
    cursor.style.left = xAxis + 'px';
}


function classListAdd(item) {
    item.classList.add('cursor__active');
}

function classListRemove(item) {
    item.classList.remove('cursor__active');
}


const myBtn = document.querySelectorAll('.footer__link');

function add(items) {
    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            classListAdd(cursor);
            item.style.color = '#08D565'
        })
    })
}

function remove(items) {
    items.forEach((item) => {
        item.addEventListener('mouseleave', () => {
            classListRemove(cursor);
            item.style.color = '';
        })
    })
}


add(links);
remove(links)

add(myBtn);
remove(myBtn)


window.addEventListener('click', () => {
    
    cursor.classList.add('click');
    setTimeout(() => {
        cursor.classList.remove('click');
    },500)
    
})


const darkMode = localStorage.getItem('darkMode');
console.log(darkMode);