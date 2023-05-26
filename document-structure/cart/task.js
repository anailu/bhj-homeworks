const cart = document.querySelector(".cart__products");
const products = document.querySelectorAll(".product");
const cartTitle = document.querySelector(".cart__title");

function getInfoAboutProduct(item) {
    const controlsItem = item.querySelector(".product__controls");
    const productQuantity = controlsItem.querySelector(".product__quantity-value");
    const imgItem = item.querySelector(".product__image").src;
    const dataId = item.getAttribute("data-id");

    const quantityIncBtn = item.querySelector(".product__quantity-control_inc");
    const quantityDecBtn = item.querySelector(".product__quantity-control_dec");

    quantityDecBtn.addEventListener("click", () => {
        if (productQuantity.textContent > 1) {
            productQuantity.textContent = Number(productQuantity.textContent) - 1;
        }
    });

    quantityIncBtn.addEventListener("click", () => {
        productQuantity.textContent = Number(productQuantity.textContent) + 1;
    });

    const addBtn = controlsItem.querySelector(".product__add");

    addBtn.addEventListener("click", () => {
        const existingCartItem = cart.querySelector(`.cart__product[data-id="${dataId}"]`);

        if (existingCartItem) {
            const existingCount = existingCartItem.querySelector(".cart__product-count");
            const totalCount = Number(existingCount.textContent) + Number(productQuantity.textContent);
            existingCount.textContent = totalCount;
        } else {
            const cartProduct = document.createElement("div");
            cartProduct.classList.add("cart__product");
            cartProduct.dataset.id = dataId;
            cartProduct.innerHTML = `
                <img class="cart__product-image" src="${imgItem}">
                <div class="cart__product-count"> ${productQuantity.textContent}</div>
            `;
            cart.appendChild(cartProduct);
        }
    });
}

products.forEach(getInfoAboutProduct);