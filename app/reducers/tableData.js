export default function Items(state=[], action){
	switch(action.type){
		case "ADD_ITEM":
			if(action.itemName && action.price && action.category!="Select a Category"){
				return [
					...state,{
						itemName: action.itemName,
						price: action.price,
						category: action.category
					}

				];
			}
		case "REMOVE_ITEM":
			return [
			...state.slice(0, action.index),
			...state.slice(action.index+1)
			];
		default:
			return state;
	}
}