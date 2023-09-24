const allProducts = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

allProducts.forEach(product => {
    const quantityValue = product.querySelector('.product__quantity-value');
    const addProduct = product.querySelector('.product__add');

    const ink = product.querySelector('.product__quantity-control_inc');
    const dec = product.querySelector('.product__quantity-control_dec');

    ink.addEventListener('click', () => {
        const currentValue = parseInt(quantityValue.textContent);
        if (!isNaN(currentValue)) {
            quantityValue.textContent = currentValue + 1;
        }
    })
    dec.addEventListener('click', () => {
        const currentValue = parseInt(quantityValue.textContent);
        if (!isNaN(currentValue) && currentValue > 1) {
            quantityValue.textContent = currentValue - 1;
        }
    })

    addProduct.addEventListener('click', (e) => {
        let dataID = product.getAttribute('data-id');
        const productImage = product.querySelector('.product__image').src;
        const productValue = parseInt(quantityValue.textContent);

        if (productValue >= 1) {
            const purchase = cart.querySelector(`.cart__product[data-id="${dataID}"]`);

            if (purchase) {
                const purchaseValue = parseInt(purchase.querySelector('.cart__product-count').textContent);
                purchase.querySelector('.cart__product-count').textContent = purchaseValue + productValue;
            } else {
                const purchase = document.createElement('div');
                purchase.classList.add('cart__product');
                purchase.setAttribute('data-id', dataID);
                purchase.innerHTML = `
            <img class="cart__product-image" src="${productImage}">
            <div class="cart__product-count">${productValue}</div>
          `;
                cart.append(purchase);
            }
        }
        quantityValue.textContent = '1';
    })
});