import { useState , Fragment} from 'react';


import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
   // Spliting Components

    // as you may have noticed that in front end if we click any tab component our header component description changes 
  // this is because as we click our tab component our this manged state changes and since it is in main App function whole 
  // dom gets re-rendered as We have called <Header>/> component here it also re-renders so we kind understand that this state we have
  // implemented in wrong place, so it is important to split components by feature and state
  
  // now as we have splited our components to individual components now we dont see header change when tab button is clicked
  return (
    // here if we omit <div> it will give error cause if we omit div react will think think there are multiple layers in return 
    // as we know that we cannot return more than one value with return statement, because at the end 
    // when react creats a element its just
    // return (
    //     React.createElement(Header)
    //     React.createElement('main')
    //   ) so here we get two elements, so we need one wrapping element, which technically return one value
    // this gives us an extra div in our dom , to void this unnecessary div react gives us a fragment component 
    // which we need to import


    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
