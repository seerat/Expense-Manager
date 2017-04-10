export function addAnItem(itemName, price, category){
	return {
		type:"ADD_ITEM",
		itemName,
		category,
		price
	}
}

export function removeAnItem(index){
	return {
		type:"REMOVE_ITEM",
		index
	}
}
