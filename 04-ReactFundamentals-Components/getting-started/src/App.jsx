function Header(){
  return (
       <header>
           
           <img src="src/assets/react-core-concepts.png" alt="hero logo" />
           
           <h1>React Fundamentals</h1>
           
           <p>
             Fundamental React concepts you will need for almost any app you are going to build!!
           </p>
        
        </header>
    )
}

function App(){

  return (

      <div>
      {/*we can use above funcitons as html in react, unlike in js where we would call Header() as function call*/}
      {/*Also it sould have closing tag*/}
        <Header /> 

        <main>
          
        
          <h2>Time to get started!</h2>


        </main>

      </div>

    );
}

export default App;