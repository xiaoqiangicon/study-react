import { createStore, applyMiddleware } from 'redux';
import rootReducer from './index';
import thunk from 'redux-thunk';

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;