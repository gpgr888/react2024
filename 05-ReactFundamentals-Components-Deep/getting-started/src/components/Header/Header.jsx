// It is to note that though we seperate our style to component specific it is not automatically limited to component scope
// meaning these styles are valid for any other elements which has class or tag outside this component
// later we will be learning to solve this limitation and we will implement component scope styles
import './Header.css';
import heroImage from '../../assets/react-core-concepts.png'
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