// ---------- FOOTER YEAR & LAST MODIFIED ----------
const currentyear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentyear;

document.getElementById('lastModified').textContent =
  "Last modification: " + document.lastModified;

// ---------- SCROLL ANIMATIONS ----------
const scrollElements = document.querySelectorAll(".introduction, .purpose, .get-started, .call-to-action, .scenarios");

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (element) => {
  element.classList.add("visible");
};

const hideScrollElement = (element) => {
  element.classList.remove("visible");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 150)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", handleScrollAnimation);
handleScrollAnimation();

// ---------- TESTIMONIALS SLIDER ----------
const swiperTestimonial = new Swiper('.testimonial__swiper', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 16,
  grabCursor: true,
  speed: 600,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});


// ACTIVITIES

        const englishButtons = document.querySelectorAll('#english button');
        const spanishButtons = document.querySelectorAll('#spanish button');
        const scoreDisplay = document.getElementById('score');
        let firstChoice = null;
        let score = 0;

        function resetSelection() {
            englishButtons.forEach(b => b.classList.remove('selected'));
            spanishButtons.forEach(b => b.classList.remove('selected'));
            firstChoice = null;
        }

        englishButtons.forEach(button => {
            button.addEventListener('click', () => {
                resetSelection();
                button.classList.add('selected');
                firstChoice = { lang: 'english', word: button.dataset.word, button };
            });
        });

        spanishButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (!firstChoice) return;
                if (firstChoice.word === button.dataset.word) {
                    button.classList.add('correct');
                    firstChoice.button.classList.add('correct');
                    score++;
                    scoreDisplay.textContent = `Score: ${score} / 4`;
                } else {
                    button.classList.add('wrong');
                    firstChoice.button.classList.add('wrong');
                    setTimeout(() => {
                        button.classList.remove('wrong');
                        firstChoice.button.classList.remove('wrong');
                    }, 800);
                }
                resetSelection();
            });
        });



