import React, { Component } from 'react'

 class Hover extends Component {
    render() {
        return (
            <div>
                 <button onMouseOver={this.changecount}>Botton Hover {this.state.count} count </button>
                
            </div>
        )
    }
}

export default Hover
