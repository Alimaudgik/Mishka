var openOrder = document.querySelector('.order-button');
var cartBlock = document.querySelector('.cart__block');
var whiteback = document.querySelector('.whiteback');
var closeOrder = document.querySelector('.close-order');
var back = document.querySelector('.cart__block-wrapper')


openOrder.addEventListener('click', function() {
  if (cartBlock.classList.contains('cart__block-off')) {
    cartBlock.classList.remove('cart__block-off');
    cartBlock.classList.add('cart__block-on');
  };

  if (back.classList.contains('back-off')) {
    back.classList.remove('back-off');
    back.classList.add('back-on');
  };
});

window.addEventListener('keydown', function(evt) {
  evt.preventDefault(evt);
  if (evt.keyCode === 27) {
    if (cartBlock.classList.contains('cart__block-on')) {
      cartBlock.classList.remove('cart__block-on');
      cartBlock.classList.add('cart__block-off');
    };

    if (back.classList.contains('back-on')) {
      back.classList.remove('back-on');
      back.classList.add('back-off')
    }
  }
});