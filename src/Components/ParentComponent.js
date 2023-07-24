import React, { Component } from 'react'
import Chaildcomponent from './Chaildcomponent'

class ParentComponent extends Component{
constructor(){
    super()
    this.state={
        Message:'hello world'
    }
   this.Accessbilitychecking=this.Accessbilitychecking.bind(this)
}
Accessbilitychecking(){
         alert(` ${this.state.Message}`)
                           
}
    render(){
    return(
    <div>
     <Chaildcomponent Test={this.Accessbilitychecking}/> 
    {/* <button onClick={this.Accessbilitychecking}>Test</button> */}
    </div>
      

    )      
    }
}
export default ParentComponent   