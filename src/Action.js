import {CHANGE_SEARCH_FIELD,
		REQUEST_PENDING,
		REQUEST_SUCCESS,
		REQUEST_FAILED} from './Constants';
export const setSearchField =(text)=>({
	type: CHANGE_SEARCH_FIELD,
	Payload: text

})
export const requestRobots=()=>(dispatch)=>{
	dispatch({type:REQUEST_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(data=>dispatch({type:REQUEST_SUCCESS,payload:data}))
  .catch(error=>dispatch({type:REQUEST_FAILED,payload:error}))

}