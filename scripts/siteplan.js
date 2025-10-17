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







