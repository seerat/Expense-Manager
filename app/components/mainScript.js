import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Main from './main.component';

import * as actionCreators from '../actionCreators/action';

function mapStateToProps(stateMeansFromStore){
	console.log(stateMeansFromStore);
	//Values form the store
	return{
		myItems: stateMeansFromStore.Items,
		category: stateMeansFromStore.category
	}

};

function mapDispatchToProps(dispatch){
	//Actions 
	return bindActionCreators(actionCreators, dispatch);

};

var App =connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;