import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const MIN_SLIDES_FOR_LOOP = 8;

document.querySelectorAll('.video-swiper').forEach((slider) => {
  const slidesContainer = slider.querySelector('.swiper-wrapper');
  let slides = slider.querySelectorAll('.swiper-slide');
  const slidesCount = slides.length;

  if (slidesCount < MIN_SLIDES_FOR_LOOP) {
    const slidesArray = [...slides];
    for (let i = 0; slides.length < MIN_SLIDES_FOR_LOOP; i++) {
      const clone = slidesArray[i % slidesArray.length].cloneNode(true);
      slidesContainer.appendChild(clone);
      slides = slider.querySelectorAll('.swiper-slide');
    }
  }

  const nextBtn = slider.querySelector('.swiper-button-next');
  const prevBtn = slider.querySelector('.swiper-button-prev');

  new Swiper(slider, {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    loopedSlides: MIN_SLIDES_FOR_LOOP,
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn
    }
  });
});
