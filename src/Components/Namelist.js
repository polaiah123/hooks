import React from 'react'

function Namelist(){
    let name = ['veera','srinivas','Brahma']
    const namelist=name.map(name=><h1>{name}</h1>)
    return <div> {namelist}</div>
           
}
export default Namelist