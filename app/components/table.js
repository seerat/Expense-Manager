import React from 'react';
import Row from './row';
import Category from './category';
import Button from './buttonControl';
 
export default class Table extends React.Component{
	constructor(props){
		super(props);
		this.state={
			selectedValue: "Select a Category",
			buttonClass: "disabled"
		};
		this.onChange = this.onChange.bind(this);
		this.onChangeInputs = this.onChangeInputs.bind(this);
		// this.removeAnItem = this.props.removeAnItem.bind();
	}
	onChange(value){
		this.setState({selectedValue:value});
	}

	onChangeInputs(){
		if(this.refs.price.value && this.refs.itemName.value && this.state.selectedValue!="Select a Category"){
			this.setState({buttonClass:"btn-primary"});
		}
	}
	handleSubmit(e){
		e.preventDefault();
		const item = this.refs.itemName.value;
		const price = this.refs.price.value;
		this.props.addAnItem(item, price, this.state.selectedValue);
		this.refs.expenseManager.reset();
	}
	render(){
		return(
			<div className="row">
				<form ref="expenseManager" className="form-inline col-xs-12">
					<input ref="itemName" onChange={this.onChangeInputs} className="form-control" placeholder="Enter the item name"/>
					<Category category={this.props.category} selectedValue={this.state.selectedValue} onChange={this.onChange} onChangeInputs={this.onChangeInputs}/>
					<input ref="price" className="form-control" placeholder="Price" onChange={this.onChangeInputs}/>
					<Button onClick={this.handleSubmit.bind(this)} buttonClass={this.state.buttonClass}/>
				</form>
				<table className="row">
					<thead className="col-xs-12">
					<tr className="row">
						<td className="col-xs-3">Item</td>
						<td className="col-xs-3">Category</td>
						<td className="col-xs-3">Price</td>
						<td className="col-xs-3">Action</td>
					</tr>
					</thead>
					<tbody className="col-xs-12">

					 		{this.props.myItems.map((item, i)=>{
								return <Row key={i} item={item} index={i}  {...this.props}/>
								})
							}
					</tbody>

				</table>
				</div>
			)
	}
};