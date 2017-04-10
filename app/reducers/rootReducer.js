import {combineReducers} from 'redux';
import {routeReducer} from 'react-router-redux';

import Items from './tableData';
import category from './category';

var rootReducer = combineReducers({
	Items,
	category
});

export default rootReducer;