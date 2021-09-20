import { combineReducers, createStore } from 'redux';
import { catalogReducer } from './catalog-reducer';

let reducer = combineReducers({
    catalogPage: catalogReducer
})

export const store = createStore(reducer);

export default store;