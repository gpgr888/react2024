import heroImage from '../assets/react-core-concepts.png'
const dynamicDescriptions = ['Fundamentals','Crucial','Core','Valuable'];

function getRamdomIndex(max){
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(){
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