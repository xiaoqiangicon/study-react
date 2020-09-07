import { ADD_TO_CART, DELETE_FROM_CART, UPDATE_CART } from './action';

// state是保存在store中的数据
// 第二个参数action是一个容器，用于：
// type: 一个简单的字符串常量，例如ADD, UPDATE, DELETE
// payload:用于更新状态的数据
const reducer = function(state=[], action) {
  return state;
}

const productsReducer = function(state=[], action) {
  return state;
}

const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk',
      quantity: 1,
      unitConst: 47,
    }
  ]
}

const cartReducer = function(state=initialState, action) {
  switch(action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    }
    case UPDATE_CART: {
      return {
        ...state,
        cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
      }
    }
    case DELETE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.product !== action.payload.product),
      }
    }


    default:
      return state;
  }
}

export { productsReducer, cartReducer }