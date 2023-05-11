//0
/*const menuLinks = document.querySelectorAll(".menu__link");

for (let i = 0; i < menuLinks.length; i++) {
    const link = menuLinks[i];

    link.onclick = function() {
        const menu = this.closest(".menu__item").querySelector(".menu");

        if (menu) {
            if (!menu.classList.contains("menu_active")) {
                menu.classList.add("menu_active");
            }
            else {
                menu.classList.remove("menu_active");
            }
            return false;
        }
    };
}*/

//1
const menuLinks = document.querySelectorAll(".menu__link");

for (let i = 0; i < menuLinks.length; i++) {
    const link = menuLinks[i];

    link.onclick = function() {
        const menu = this.closest(".menu__item").querySelector(".menu");
        const activeMenu = document.querySelector(".menu_active");

        if (activeMenu && activeMenu !== menu) {
            activeMenu.classList.remove("menu_active");
        }

        if (menu) {
            if (!menu.classList.contains("menu_active")) {
                menu.classList.add("menu_active");
            }
            else {
                menu.classList.remove("menu_active");
            }
            return false;
        }
    };
}