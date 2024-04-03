// Adiciona um produto ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const product = event.target.parentElement;
    const productName = product.querySelector('h3').textContent;
    const productPrice = product.querySelector('.price').textContent;

    const cartItem = document.createElement('div');
    cartItem.textContent = `${productName} - ${productPrice}`;
    
    document.querySelector('.cart-items').appendChild(cartItem);

    updateTotal(productPrice);
}

// Atualiza o total do carrinho
function updateTotal(price) {
    const totalElement = document.querySelector('.total span');
    let total = parseFloat(totalElement.textContent);
    total += parseFloat(price.replace('R$ ', ''));
    totalElement.textContent = total.toFixed(2);
}

// Mostra ou oculta o formulário de login
document.getElementById('login').addEventListener('click', toggleLoginForm);

function toggleLoginForm() {
    const loginForm = document.getElementById('login-form');
    loginForm.classList.toggle('hidden');
}