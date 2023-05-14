const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function(dropdown) {
    const dropdownList = dropdown.querySelector(".dropdown__list");
    const dropdownValue = dropdown.querySelector(".dropdown__value");

    dropdownValue.onclick = function() {
        dropdownList.classList.toggle("dropdown__list_active");
    };

    const dropdownItems = dropdown.querySelectorAll(".dropdown__item");

    dropdownItems.forEach(function(item) {
        item.onclick = function(event) {
            dropdownValue.textContent = item.textContent;
            dropdownList.classList.remove("dropdown__list_active");
            return false;
        };
    })
});