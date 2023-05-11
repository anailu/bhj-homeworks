const sliderItems = document.querySelectorAll(".slider__item");
const sliderDots = document.querySelectorAll(".slider__dot");
const prevButton = document.querySelector(".slider__arrow_prev");
const nextButton = document.querySelector(".slider__arrow_next");

prevButton.addEventListener("click", goToPrevSlide);
nextButton.addEventListener("click", goToNextSlide);

sliderDots.forEach(function(dot, index) {
  dot.addEventListener("click", function() {
    goToSlide(index);
  });
});

sliderDots[0].classList.add("slider__dot_active");

function updateActiveSlide(index) {
  sliderItems.forEach(function(item) {
    item.classList.remove("slider__item_active");
  });

  sliderDots.forEach(function(dot) {
    dot.classList.remove("slider__dot_active");
  });

  sliderItems[index].classList.add("slider__item_active");
  sliderDots[index].classList.add("slider__dot_active");
}

function goToPrevSlide() {
  const activeSlideIndex = Array.from(sliderItems).findIndex(function(item) {
    return item.classList.contains("slider__item_active");
  });

  let newIndex = activeSlideIndex - 1;
  if (newIndex < 0) {
    newIndex = sliderItems.length - 1;
  }

  updateActiveSlide(newIndex);
}

function goToNextSlide() {
  const activeSlideIndex = Array.from(sliderItems).findIndex(function(item) {
    return item.classList.contains("slider__item_active");
  });

  let newIndex = activeSlideIndex + 1;
  if (newIndex >= sliderItems.length) {
    newIndex = 0;
  }

  updateActiveSlide(newIndex);
}

function goToSlide(index) {
  updateActiveSlide(index);
}