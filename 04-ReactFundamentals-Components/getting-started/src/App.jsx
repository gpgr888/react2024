import heroImage from './assets/react-core-concepts.png';

import coreConceptImage from './assets/components.png';

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
function CoreConcepts(props){
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
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
              <CoreConcepts 
                title ="Components"
                img={coreConceptImage}
                description="The core UI building block"
              />
              <CoreConcepts />
              <CoreConcepts />
              <CoreConcepts />
            </ul>

          </section>
          <h2>Time to get started!</h2>


        </main>

      </div>

    );
}

export default App;