("use strict");
export default function carousel() {
  const deactiveClassName = "deactive";
  const carouselBtns = document.querySelectorAll(".carousel__btns");
  // First carousel
  const btnLeft = document.querySelector(".js-btn-left");
  const btnRight = document.querySelector(".js-btn-right");
  const carouselSlide = document.querySelectorAll(".js-tab");
  let currSlide = 0;
  const maxSlide = carouselSlide.length;

  // Second carousel
  const btnLeftSec = document.querySelector(".js-btn-left-sec");
  const btnRightSec = document.querySelector(".js-btn-right-sec");
  const carouselSlideSec = document.querySelectorAll(".js-tab-sec");
  let currSlideSec = 0;
  const maxSlideSec = carouselSlideSec.length;

  const zoomOffOnDoubleClick = function () {
    if (!window.matchMedia("(min-width:1100px)").matches) {
      carouselBtns.forEach((btn) => btn.classList.add("disable-dbl-tap-zoom"));
    }
  };

  const goToSlide = function (slides, slide = 0, btnLeft, btnRight) {
    if (slide === 0) {
      btnLeft.classList.add(deactiveClassName);
    }
    if (slide === maxSlide - 1) {
      btnRight.classList.add(deactiveClassName);
    }

    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function (btnLeft) {
    btnLeft.classList.remove(deactiveClassName);
  };

  const previousSlide = function (btnRight) {
    btnRight.classList.remove(deactiveClassName);
  };

  //Events
  // First carousel
  btnLeft.addEventListener("click", () => {
    previousSlide(btnRight);
    currSlide--;
    goToSlide(carouselSlide, currSlide, btnLeft, btnRight);
  });

  btnRight.addEventListener("click", () => {
    nextSlide(btnLeft);
    currSlide++;
    goToSlide(carouselSlide, currSlide, btnLeft, btnRight);
  });

  // Second carousel
  btnLeftSec.addEventListener("click", () => {
    previousSlide(btnRightSec);
    currSlideSec--;
    goToSlide(carouselSlideSec, currSlideSec, btnLeftSec, btnRightSec);
  });

  btnRightSec.addEventListener("click", () => {
    nextSlide(btnLeftSec);
    currSlideSec++;
    goToSlide(carouselSlideSec, currSlideSec, btnLeftSec, btnRightSec);
  });

  goToSlide(carouselSlide, currSlide, btnLeft, btnRight);
  goToSlide(carouselSlideSec, currSlideSec, btnLeftSec, btnRightSec);
  zoomOffOnDoubleClick();
}
