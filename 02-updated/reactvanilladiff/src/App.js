
//necessary imports required 
import './index.css';
import logo from './logo.png';
//use of useState hook
import { useState } from 'react';
//static content
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
      ],
      [
        "Vanilla JavaScript requires imperative programming",
        "Imperative Programming: You define all the steps needed to achieve a result",
        "React on the other hand embraces declarative programming",
        "With React, you define the goal and React figures out how to get there"
      ]
  ];

//default export as this will be imported in index.js
export default function App(){
// a constant activeContentIndex variable is created using state hook(functional component) with initial value of 0, and setActiveContentIndex
  //is function that will update activeContentIndex value
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (

    <div>
       <header>
          <img src={logo} alt="logo"/>
          <div>
            <h1>React Test</h1>
            <p>An Example  to show difference between vanilla and react js</p>
          </div>
       </header>
       <div id="tabs">
          <menu>
          {/*for each button clicked onclick function is binded to setActiveContentIndex function of state hook that will update the active index
          an ternary operator is used to check the value of activeContentIndex and accordingly show class */}
            <button className={activeContentIndex === 0 ? 'active':''} onClick={() => setActiveContentIndex(0)}>Why React</button>
            <button className={activeContentIndex === 1 ? 'active':''} onClick={() => setActiveContentIndex(1)}>Core Features</button>
            <button className={activeContentIndex === 2 ? 'active':''} onClick={() => setActiveContentIndex(2)}>Related Resources</button>
             <button className={activeContentIndex === 3 ? 'active':''} onClick={() => setActiveContentIndex(3)}>React vs Js</button>
          </menu>
          <div id="tab-content">
            <ul>
            {/*the content key value according to activeCampaignIndex and loop through map function to create a list */}
            {content[activeContentIndex].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
       </div>
    </div>

  );
}