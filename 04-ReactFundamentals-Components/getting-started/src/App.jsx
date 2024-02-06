import heroImage from './assets/react-core-concepts.png';

import coreConceptImage from './assets/components.png';

import { CORE_CONCEPTS } from './data';

const dynamicDescriptions = ['Fundamentals','Crucial','Core','Valuable'];

function getRamdomIndex(max){
  return Math.floor(Math.random() * (max + 1));
}
function Header(){
  const description = dynamicDescriptions[getRamdomIndex(3)];
  return (
       <header>
           
           <img src={heroImage} alt="hero logo" />
           
           <h1>React Fundamentals</h1>
           
           <p>
             {description} React concepts you will need for almost any app you are going to build!!
           </p>
        
        </header>
    )
}
// here in regular javascript usually we would have multiple variables as arguments that are passed from calling function but in react
// there is only one variable and thas props (this can be named anything since its your component) 
// this props will be set by react and there fore react will pass this props values to this component when it calls it
// and this props will be an object and it will have all title,image and description that we have passed while using this component
// this below function is completely fine but if we can use concept of destructuring 
// function CoreConcepts(props){
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h1>{props.title}</h1>
//       <p>{props.description}</p>
//     </li>
//   )
// }
// we are destructering the arrays values because in our data js file we had key values as objects
// export const CORE_CONCEPTS = [
//   {
//     image: componentsImg,
//     title: 'Components',
//     description:
//       'The core UI building block - compose the user interface by combining multiple components.',
//   },
function CoreConcepts({title,image,description}){
  return (
    <li>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </li>
  )
}
function App(){

  return (

      <div>
      {/*we can use above funcitons as html in react, unlike in js where we would call Header() as function call*/}
      {/*Also it sould have closing tag*/}
        <Header /> 

        <main>
          
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
            {/*here we can learn about a crucial concept of props, as we want to pass different data as props to the component*/}
            {/*we can add custom attributes to our custom component and its entirely up to us in react these attributes are called props*/}
              {/*<CoreConcepts 
                title ="Components"
                image={coreConceptImage}
                description="The core UI building block"
              />
              <CoreConcepts />
              <CoreConcepts />
              <CoreConcepts />*/}
            {/*this works but this is a lenghty method we rather use below alternative if we have objects or arrays where keys are same*/}
              {/*<CoreConcepts 
                title ={CORE_CONCEPTS[0].title}
                image={CORE_CONCEPTS[0].image}
                description={CORE_CONCEPTS[0].description}
              />
               <CoreConcepts 
                title ={CORE_CONCEPTS[1].title}
                image={CORE_CONCEPTS[1].image}
                description={CORE_CONCEPTS[1].description}

              />
               <CoreConcepts 
                title ={CORE_CONCEPTS[2].title}
                image={CORE_CONCEPTS[2].image}
                description={CORE_CONCEPTS[2].description}
              />
               <CoreConcepts 
                title ={CORE_CONCEPTS[3].title}
                image={CORE_CONCEPTS[3].image}
                description={CORE_CONCEPTS[3].description}
              />*/}
            {/*we can use spread operator if the data keys name and our component props are same*/}
              <CoreConcepts 
                {...CORE_CONCEPTS[0]}
              />
              <CoreConcepts 
                {...CORE_CONCEPTS[1]}
              />
              <CoreConcepts 
                {...CORE_CONCEPTS[2]}
              />
              <CoreConcepts 
                {...CORE_CONCEPTS[3]}
              />
            </ul>

          </section>
          <h2>Time to get started!</h2>


        </main>

      </div>

    );
}
// More Prop Syntaxes
// Beyond the various ways of setting and extracting props about which you learned in the previous lecture, there are even more ways of dealing with props.

// But no worries, you'll see all these different features & syntaxes in action throughout the course!

// Passing a Single Prop Object

// If you got data that's already organized as a JavaScript object, you can pass that object as a single prop value instead of splitting it across multiple props.

// I.e., instead of

// <CoreConcept
//   title={CORE_CONCEPTS[0].title}
//   description={CORE_CONCEPTS[0].description}  
//   image={CORE_CONCEPTS[0].image} />
// or

// <CoreConcept
//   {...CORE_CONCEPTS[0]} />
// you could also pass a single concept (or any name of your choice) prop to the CoreConcept component:

// <CoreConcept
//   concept={CORE_CONCEPTS[0]} />
// In the CoreConcept component, you would then get that one single prop:

// export default function CoreConcept({ concept }) {
//   // Use concept.title, concept.description etc.
//   // Or destructure the concept object: const { title, description, image } = concept;
// }
// It is entirely up to you which syntax & approach you prefer.

// Grouping Received Props Into a Single Object

// You can also pass multiple props to a component and then, in the component function, group them into a single object via JavaScript's "Rest Property" syntax.

// I.e., if a component is used like this:

// <CoreConcept
//   title={CORE_CONCEPTS[0].title}
//   description={CORE_CONCEPTS[0].description}  
//   image={CORE_CONCEPTS[0].image} />
// You could group the received props into a single object like this:

// export default function CoreConcept({ ...concept }) { 
//   // ...concept groups multiple values into a single object
//   // Use concept.title, concept.description etc.
//   // Or destructure the concept object: const { title, description, image } = concept;
// }
// If that syntax is a bit confusing - worry not! You'll also see concrete examples for this syntax (and for why you might want to use it in certain situations) throughout the course!

// Default Prop Values

// Sometimes, you'll build components that may receive an optional prop. For example, a custom Button component may receive a type prop.

// So the Button component should be usable either with a type being set:

// <Button type="submit" caption="My Button" />
// Or without it:

// <Button caption="My Button" />
// To make this component work, you might want to set a default value for the type prop - in case it's not passed.

// This can easily be achieved since JavaScript supports default values when using object destructuring:

// export default function Button({ caption, type = "submit" }) { 
//   // caption has no default value, type has a default value of "submit"
// }
export default App;