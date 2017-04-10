import {createStore, compse} from 'redux';
//import {syncHistoryWithStore} from 'react-router-redux';
//import {browserHistory} from 'react-router';
import rootReducer from '../reducers/rootReducer';

import Items from '../data/items';
import category from '../data/category';

let defaultState = {Items, category};
let store = createStore(rootReducer, defaultState);
//export const history = syncHistoryWithStore(browserHistory, store);
export default store;
console.log(store);