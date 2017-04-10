import {createStore, compse} from 'redux';
import rootReducer from '../reducers/rootReducer';

import Items from '../data/items';
import category from '../data/category';

let defaultState = {Items, category};
let store = createStore(rootReducer, defaultState);

export default store;