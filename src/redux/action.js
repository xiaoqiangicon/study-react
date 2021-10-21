const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';
const UPDATE_CART = 'UPDATE_CART';

function addToCart(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity, unitCost },
  }
}

function updateCart(product, quantity, unitCost) {
  return {
    type: UPDATE_CART,
    payload: {
      product,
      quantity,
      unitCost,
    }
  }
}

function deleteFromCart(product) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      product,
    }
  }
}

export const fetchTodos = () => dispatch => ()

export { addToCart, ADD_TO_CART, DELETE_FROM_CART, UPDATE_CART,  updateCart, deleteFromCart }