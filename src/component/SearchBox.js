import React from 'react';
const SearchBox=({SerachField,SearchChange})=>{
	
	return(
		<div className='pa2'>
			<input className='pa3 ba b--green bg-lightest-blue' 
			type='text' 
			placeholder='Search Robots'
			onChange={SearchChange} />
		</div>
);
}
export default SearchBox;