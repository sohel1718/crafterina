import { createStore, combineReducers } from 'redux';
import { Loader } from './Loader/reducer/index';

export const store = createStore(combineReducers({ Loader }));
