import React, { Component } from 'react'
import Memocomp from './Memocomp'

class LifeCycleA extends Component{ 
    
constructor(props){
    console.log('calling constructor')
    super(props)
        this.state={
            name :'Veera',

            
        }
    }

componentDidMount() {
    setInterval(()=>{
        this.setState({
          name: 'srinivas'  
        })
    },2000)
}

    render(){
        console.log('*****************render method****************')
      return( 
          <div>
              <Memocomp/>
      <h1>name={this.state.name} </h1> 
      </div>
        )
      
        }
      }

        
    
  

export default LifeCycleA