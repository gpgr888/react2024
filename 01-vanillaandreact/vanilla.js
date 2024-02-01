

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

	
	function displayContent(Items){
		var listContents = "";
		for (const item of Items) {
			listContents += '<li>'+item+'</li>';
		}

		const list = document.createElement('ul');
		tabContent.innerHTML =""; //clear all the content first
		list.innerHTML = listContents; //add each loop items to inner html of ul
		tabContent.append(list); //finally append items to tabContent
	}
	displayContent(content[0]);

	function makeButtonActive(btn){
		whyReact.className = '';
		coreFeatures.className = '';
		resources.className = '';
		btn.className = 'active';
	}

	function handleClick(event){
		const btnId = event.target.id;
		makeButtonActive(event.target);
		if(btnId === 'why-react'){
			displayContent(content[0]);

		}else if(btnId === 'core-features'){
			displayContent(content[1]);
		}else{
			displayContent(content[2]);
		}

	}

	whyReact.addEventListener("click", handleClick);
	coreFeatures.addEventListener("click", handleClick);
 	resources.addEventListener("click",handleClick);



