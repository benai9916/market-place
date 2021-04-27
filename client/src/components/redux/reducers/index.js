import { combineReducers } from 'redux';
import products from './products';
import auth from './auth';
import seller from './sellerdetail';
import sellerdetail from './getseller';

export default combineReducers({
    products,
    auth,
    seller,
    sellerdetail,
}) 