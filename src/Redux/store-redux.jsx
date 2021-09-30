import { combineReducers, createStore } from 'redux';
import { catalogReducer } from './catalog-reducer';
import { examplesReducer } from './examples-reducer';

let reducer = combineReducers({
    catalogPage: catalogReducer,
    examplesPage: examplesReducer

})

export const store = createStore(reducer);

export default store;