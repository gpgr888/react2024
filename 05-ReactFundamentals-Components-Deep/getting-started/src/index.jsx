// this is the main file , this is where our react app boots up

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// to be precise these ReactDOM library is responsible for rendering , our jsx code is passed to this library, 

// below we are getting a main div id where we are trying to mount our app code and then using ReacDOM library and and its render
// funcion we render our <App /> component

const mainPoint = document.getElementById("root");
ReactDOM.createRoot(mainPoint).render(<App />);
// ReactDOM.createRoot(document.getElementById('root')).render( 
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


// oour App component may contain many child component and child component may contain many nested components which makes a component tree 
// and hirarchy but in frontend we dont them as nested component we see a regular html tags and all as react converts our jxs to regular html

// NOTE : ALL THE BUILD IN COMPONENTS LIKE DIV,HEADER,MAIN,SECTION ETC ARE IN LOWER CASE WHERE AS OUR CUSTOM COMPONENTS MUST START WITH UPPER CASE
