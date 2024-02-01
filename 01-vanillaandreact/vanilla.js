
//some constant array datas
const content = [
		  [
		    "React is extremely popular",
		    "It makes building complex, interactive UIs a breeze",
		    "It's powerful & flexible",
		    "It has a very active and versatile ecosystem"
		  ],
		  [
		    "Components, JSX & Props",
		    "State",
		    "Hooks (e.g., useEffect())",
		    "Dynamic rendering"
		  ],
		  [
		    "Official web page (react.dev)",
		    "Next.js (Fullstack framework)",
		    "React Native (build native mobile apps with React)"
		  ]
	];

	let whyReact = document.getElementById("why-react");
	let coreFeatures = document.getElementById("core-features");
	let resources = document.getElementById("resources");
	let tabContent = document.getElementById("tab-content");

	//a function to display content when tab button is pressed
	function displayContent(Items){

		var listContents = "";
		//loop through each item of content array and append all of them in list
		for (const item of Items) {
			listContents += '<li>'+item+'</li>';
		}
        //create an unordered list element
		const list = document.createElement('ul');
		
		tabContent.innerHTML =""; //clear all the content first
		list.innerHTML = listContents; //add each loop items to inner html of ul
		tabContent.append(list); //finally append items to tabContent
	}
	//default display tab first content
	displayContent(content[0]);

//change the active class for button which is clicked
	function makeButtonActive(btn){
		whyReact.className = '';
		coreFeatures.className = '';
		resources.className = '';
		btn.className = 'active';
	}
//a function to display content as button is pressed
	function handleClick(event){
		//get element id bt event
		const btnId = event.target.id;
		//change the tab class to active
		makeButtonActive(event.target);
		//match the id and accordingly display content
		if(btnId === 'why-react'){
			displayContent(content[0]);

		}else if(btnId === 'core-features'){
			displayContent(content[1]);
		}else{
			displayContent(content[2]);
		}

	}
	//add event listener to button elements call handle click function for each of them

	whyReact.addEventListener("click", handleClick);
	coreFeatures.addEventListener("click", handleClick);
 	resources.addEventListener("click",handleClick);



