import { useState } from "react";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";

const Pagination = (props) => {
	const { num } = props
	const [currentPage, setCurrentPage] = useState(0)
	const handleClick = (page) => {
		if (page === -1 && currentPage > 0)
			setCurrentPage(currentPage - 1)
		else if (page === num && currentPage < num)
			setCurrentPage(currentPage + 1)
	    else if (page !== currentPage) 
	      setCurrentPage(page)
  	};
	let buttons = []
	for(let x = 1; x <= num; x++)
		buttons.push(x)
	return (
		<Panel>
			<Button key="-1" text="<"  onClick={() => handleClick(-1)}/>
			{buttons.map((button, index)=>{
         		return <Button key={index} text={button} active={currentPage === index} onClick={() => handleClick(index)} />
     		})}
			<Button key={buttons.length} text=">"  onClick={() => handleClick(num)} />
		</Panel>
	)
};

export default Pagination
