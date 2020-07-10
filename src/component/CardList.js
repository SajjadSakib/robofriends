import React from 'react';
import Card from '../component/Card';

const CardList = ({robots})=>{
	const CardArray=robots.map((element,i)=>{
		return <Card key={i} name={robots[i].name} id={robots[i].id} email={robots[i].email}/>;
	});
	return(
		<div>
		  	{CardArray}
		</div>
	);
}

export default CardList;