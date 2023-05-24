const interestCheckboxes = document.getElementsByClassName("interest__check");

for (let i = 0; i < interestCheckboxes.length; i++) {
    interestCheckboxes[i].addEventListener("click", toggleNestedCheckboxes);
}

function toggleNestedCheckboxes() {
    const nestedCheckboxes = this.closest(".interest").querySelectorAll(".interest__check");
    for (let i = 0; i < nestedCheckboxes.length; i++) {
        nestedCheckboxes[i].checked = this.checked;
    }
}