import React from 'react';

export default class Category extends React.Component{
	onChangeCategory(e){
		this.props.onChange(e.target.value);
	}
	render(){
		const {category, selectedValue, onChange} = this.props;
		return(
				<div className="form-group">
			      <div className="col-sm-6 col-md-4">
			        <select id="company" className="form-control" onChange={this.onChangeCategory.bind(this)}>
			          <option selected>{selectedValue}</option>
			           {category.map((item, index) => <option key={item.id}>{item.name}</option>)}
			        </select> 
			      </div>
			    </div>
			);
	}
}