// import logo from './logo.svg';
import React,{ Component } from 'react';
import './App.css';
//import  StateExample from './Components/State_example'
//import Function_click from './Components/Function_click'
//import Greetings from './Components/Greeting'
//import ParentComponent from './Components/ParentComponent'
//import Welcome from './Components/Welcome';
//import Namelist from './Components/Namelist';
import NameForm from './Components/FormsExample';
//import LifeCycleA from './Components/LifeCycleA';
import Demoref from './Components/Demoref';
import Portalexample from './Components/Portalexample';
import Renderprops from './Components/Renderprops';

//import Hover from './Components/Hover';

class App extends Component{ 
render() {
  return (
    <div className="App">  
       <NameForm/>
       <Demoref></Demoref>
       <Portalexample/>
       <Renderprops/>      
        {/* <StateExample />
       <Hover/> */}
      
    {/* <h1>hello world </h1>
      <Greetings name="Srinivasa" fan="megastar"/> 
     {/*<Greetings name="veera" fan="Powerstar"/>
     <Namelist/>
     <StateExample/> 
     <ParentComponent/>
    <Function_click/> 
     */}

    </div>    
  
  );

    // <div className="App">
    // <Greetings name="veera"/>
    // <Greetings name ="krishna" />
    // <Greetings name ="srinivasa"/>
    // <Greetings><p>this is an wrapper class</p>
    //   <button className="btn_action_color">
    //     Action
    //   </button>
    // </Greetings>
    // <Welcome name ="this is an class component"/>
    // </div>
    
   

}
}

export default App;
