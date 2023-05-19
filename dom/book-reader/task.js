const fontSizes = document.querySelectorAll(".font-size");
const book = document.getElementById("book");
const bookColorsText = document.querySelectorAll(".book__control_color .color");
const bookColorsBackground = document.querySelectorAll(".book__control_background .color");

fontSizes.forEach(function(font) {
    font.addEventListener("click", function(event) {
        event.preventDefault();

    fontSizes.forEach(function(font) {
        font.classList.remove("font-size_active");
    });

    this.classList.add("font-size_active");
    
    book.classList.toggle("book_fs-small", 
    this.classList.contains("font-size_small"));
    
    book.classList.toggle("book_fs-big", 
    this.classList.contains("font-size_big"));
    });
});

bookColorsText.forEach(function(colorText) {
    colorText.addEventListener("click", function(event) {
    event.preventDefault();

    bookColorsText.forEach(function(colorText) {
        colorText.classList.remove("color_active");
    });

    console.log(this);
    this.classList.add("color_active");

    book.classList.toggle("book_color-black", 
    this.classList.contains("text_color_black"));

    book.classList.toggle("book_color-whitesmoke", 
    this.classList.contains("text_color_whitesmoke"));
    
    book.classList.toggle("book_color-gray", 
    this.classList.contains("text_color_gray"));
    });
})

bookColorsBackground.forEach(function(colorText) {
    colorText.addEventListener("click", function(event) {
        event.preventDefault();

    bookColorsBackground.forEach(function(colorText) {
        colorText.classList.remove("color_active");
    });

    this.classList.add("color_active");
    
    book.classList.toggle("bg_color_black", 
    this.classList.contains("bg_color_black"));

    book.classList.toggle("bg_color_gray", 
    this.classList.contains("bg_color_gray"));
    
    book.classList.toggle("bg_color_white", 
    this.classList.contains("bg_color_white"));
    });
})