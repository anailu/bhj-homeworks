const menuLinks = document.querySelectorAll(".menu__link");

for (let i = 0; i < menuLinks.length; i++) {
    const link = menuLinks[i];

    link.onclick = function() {
        const menu = this.closest(".menu__item").querySelector(".menu");
        const activeMenu = document.querySelector(".menu_active");

        if (activeMenu && activeMenu !== menu) {
            activeMenu.classList.remove("menu_active");
        }
        
        menu.classList.toggle("menu_active");
        return false;
    };
}