import React, { Component } from 'react'

class Renderprops extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
        this.changecount=this.changecount.bind(this)
    }
    changecount(){
        //alert('veera');
        //debugger
             
                 this.setState({
                     count:this.state.count+1
                 },console.log(this.state.count+1))
    
    }
    render() {
        return (
        
            <div>
           <h1 onMouseOver={this.changecount}>Hovercount</h1>     
            </div>
        )
    }
}
export default Renderprops
