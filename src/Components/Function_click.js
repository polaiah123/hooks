import React from 'react'

function Function_click(){
    function clickTest() {
        console.log('button clicked')
    }
    return(
        <div>
            <h1>hello </h1>
            <button onClick={clickTest}>Count</button>
        </div>   
    )
}

export default Function_click