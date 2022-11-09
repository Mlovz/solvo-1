const SliderImages = (activeSlide = 2) => {
  const images = document.querySelectorAll(".images_img");

  images[activeSlide].classList.add("active");

  //   ------- 1 вариант --------------
  // for (let i = 0; i < images.length; i++) {
  //   images[i].addEventListener("click", () => {
  //     images.forEach((slide) => {
  //       slide.classList.remove("active");
  //     });
  //     images[i].classList.add("active");
  //   });
  // }

  //   ------- 2 вариант --------------
  //   for (let slide of images) {
  //     slide.addEventListener("click", () => {
  //       images.forEach((slide) => {
  //         slide.classList.remove("active");
  //       });
  //       slide.classList.add("active");
  //     });
  //   }

  //   ------- 3 вариант --------------
  //   images.forEach((item) => {
  //     item.addEventListener("click", () => {
  //       images.forEach((slide) => {
  //         slide.classList.remove("active");
  //       });
  //       item.classList.add("active");
  //     });
  //   });
};

SliderImages(3);
