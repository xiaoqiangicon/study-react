import { combineReducers } from 'redux';
import { productsReducer, cartReducer } from './reducer';

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer,
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;