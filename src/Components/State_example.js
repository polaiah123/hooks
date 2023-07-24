import React, { Component } from 'react'

class StateExample extends Component{


    render(){
    return(
    <div>
        <div>
     {/* <h1>Count:{this.state.count}</h1>  */}
      <button onClick={this.changecount}>Botton clicked {this.state.count} times </button>
        </div>
        <div>
            <h1>hello veera</h1>
        </div>
    </div>
    )      
    }
}
export default StateExample   