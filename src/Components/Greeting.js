import React from 'react'

function Greeting(Props) {
    return(
        <div>
            <h1>hello {Props.name} are you fan of {Props.fan}?</h1>
        </div>   
    )
}

export default Greeting
