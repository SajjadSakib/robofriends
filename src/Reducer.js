import {CHANGE_SEARCH_FIELD,
		REQUEST_PENDING,
		REQUEST_SUCCESS,
		REQUEST_FAILED} from './Constants';
const initialState={
	searchField:''
}
export const searchRobots =(state=initialState,action={})=>{
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({},state,{searchField:action.Payload})
		
	default: 
		return state;

	}
}

const intialStateRobots={
	isPending:false,
	robots:[],
	error:''
}
export const requestRobots=(state=intialStateRobots,action={})=>{
	switch(action.type){
		case REQUEST_PENDING:
			return Object.assign({},state,{isPending:true})
		case REQUEST_SUCCESS:
			return Object.assign({},state,{robots:action.payload,isPending:false})
		case REQUEST_FAILED:
			return Object.assign({},state,{error:action.payload,isPending:false})
		default:
			return state;


	}
}