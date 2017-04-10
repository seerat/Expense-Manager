import React from 'react';

export default class Item extends React.Component{
	render(){
		const btnClass = `btn btn-sm pull-right ${this.props.buttonClass}`;
		return(
			<div className="col-xs-12">
				<input type="Submit" className={btnClass} value="Add" onClick={this.props.onClick}/>
			</div>
			)
	}
}