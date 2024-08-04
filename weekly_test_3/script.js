let cart = {
    product1: 2,
    product2: 3,
    product3: 0
};

function updateCart(product, change) {
    if (cart[product] + change >= 0) {
        cart[product] += change;
        document.getElementById(`quantity-${product}`).innerText = cart[product];
        document.getElementById(`cart-${product}`).innerText = cart[product];
        updateTotal();
    }
}

function updateTotal() {
    const prices = {
        product1: 100,
        product2: 200,
        product3: 300
    };
    let total = 0;
    for (let product in cart) {
        total += cart[product] * prices[product];
    }
    document.getElementById('total').innerText = total;
}
