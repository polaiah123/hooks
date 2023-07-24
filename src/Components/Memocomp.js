import React from 'react'

function Memocomp() {
    console.log('memo component')
    return (
        <React.Fragment>
            
        </React.Fragment>
    )
}

export default React.memo(Memocomp)
