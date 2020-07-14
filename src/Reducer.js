import {CHANGE_SEARCH_FIELD} from './Constants'
const initialState={
	searchField:''
}
export const searchRobots =(state=initialState,action={})=>{
	 console.log(action.Payload)
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({},state,{searchField:action.Payload})
		
	default: 
		return state

	}
}