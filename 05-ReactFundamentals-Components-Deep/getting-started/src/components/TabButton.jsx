export default function TabButton({children, onSelect, isSelected}){
	// Normally in javascript to add eventlisterner we would do like below
	// document.querySelector('button').addEventListener('click', () => {
	// 	// and you write the code but we do not do this as in very early we have said that react is declarative so we dont write imperative code like this 
	// 	//so insdead we use the props of button component as in fact button is build in component like onClick we would have many on props for build in components
	// })
	// its completely legal to create a funciton inside a component function and 
	// the advantage of defining these event handler function inside the component function is that
	// we can have access to the component's props and state which we will cover later in detail
	// function handleClick(){
	// 	console.log("Hello World");

	// }
	return (
		<li>
			{/*it is to note that we dont want to execute a function so we dont use parentheses rather we use as a value
				it will be executed by react when we click button later in some time if we use parentherses this code will be
				executed when button compoent is rendered, somehting which we need to avoid

			*/}
			<button className={isSelected ? 'active':undefined} onClick={onSelect}>
				{children}
			</button>
		</li>
	);
}