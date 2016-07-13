import template from './add_to_cart.html';
const controller = 'AddToCartController';

function addToCart() {
  return { controller, template }
};

export default addToCart;