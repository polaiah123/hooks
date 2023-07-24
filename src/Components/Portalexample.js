import React from 'react'
import  ReactDOM  from 'react-dom'

 function Portalexample() {
   return ReactDOM.createPortal (
        <div>
            <h1>Veera</h1>
        </div>,
        document.getElementById('Portal')
    )
}

export default Portalexample
