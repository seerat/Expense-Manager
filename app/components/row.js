import React from 'react';

export default class Row extends React.Component{
	render(){
		const {item, index, removeAnItem} =this.props;
		return(		
			 <tr className="row">
				<td className="col-xs-3">{item.itemName}</td>
				<td className="col-xs-3">{item.category}</td>
				<td className="col-xs-3">{item.price}</td>
				<td className="col-xs-3">
					<button type="button" className="close" aria-label="Close"onClick={removeAnItem.bind(null, index)}>
					  <span aria-hidden="true">&times;</span>
					</button>
				</td>
			 </tr>
			)
	}
}