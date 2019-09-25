var openOrder = document.querySelector('.order-button');
var cartBlock = document.querySelector('.cart__block');
var whiteback = document.querySelector('.whiteback');
var closeOrder = document.querySelector('.close-order')

openOrder.addEventListener('onclick', function() {
  if (cartBlock.classList.contains('cart__block-off')) {
    cartBlock.classList.remove('cart__block-off');
    cartBlock.classList.add('cart__block-on')
  };
})

