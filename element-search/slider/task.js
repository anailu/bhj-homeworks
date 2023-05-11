//0
/*const sliderItems =  Array.from(document.querySelectorAll(".slider__item"));
const prevButton = document.querySelector(".slider__arrow_prev");
const nextButton = document.querySelector(".slider__arrow_next");
let currentIndex = 0;

prevButton.addEventListener("click", goToPrevSlide);
nextButton.addEventListener("click", goToNextSlide);

function updateActiveSlide() {
    sliderItems.forEach(function(item) {
    item.classList.remove("slider__item_active");
  });
  
  sliderItems[currentIndex].classList.add("slider__item_active");
}

function goToPrevSlide() {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = sliderItems.length - 1;
    }

    updateActiveSlide();
}

function goToNextSlide() {
  currentIndex++;

  if (currentIndex >= sliderItems.length) {
    currentIndex = 0;
  }

  updateActiveSlide();
}*/

//1
const sliderItems = document.querySelectorAll(".slider__item");
const sliderDots = document.querySelectorAll(".slider__dot");
const prevButton = document.querySelector(".slider__arrow_prev");
const nextButton = document.querySelector(".slider__arrow_next");
let currentIndex = 0;

prevButton.addEventListener("click", goToPrevSlide);
nextButton.addEventListener("click", goToNextSlide);

sliderDots.forEach(function(dot, index) {
  dot.addEventListener("click", function() {
    goToSlide(index);
  });
});

sliderDots[0].classList.add("slider__dot_active");

function updateActiveSlide() {
  sliderItems.forEach(function(item) {
    item.classList.remove("slider__item_active");
  });

  sliderDots.forEach(function(dot) {
    dot.classList.remove("slider__dot_active");
  });

  sliderItems[currentIndex].classList.add("slider__item_active");
  sliderDots[currentIndex].classList.add("slider__dot_active");
}

function goToPrevSlide() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = sliderItems.length - 1;
  }

  updateActiveSlide();
}

function goToNextSlide() {
  currentIndex++;

  if (currentIndex >= sliderItems.length) {
    currentIndex = 0;
  }

  updateActiveSlide();
}

function goToSlide(index) {
  currentIndex = index;
  
  updateActiveSlide();
}