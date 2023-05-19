const rotatorCase = document.querySelectorAll(".rotator__case");
let currentActiveIndex = 0;

setInterval(() => {
    const prevActiveIndex = currentActiveIndex;
    const nextActiveIndex = (currentActiveIndex + 1) % rotatorCase.length;

    rotatorCase[prevActiveIndex].classList.remove("rotator__case_active");
    rotatorCase[nextActiveIndex].classList.add("rotator__case_active");

    currentActiveIndex = nextActiveIndex;
}, 1000);