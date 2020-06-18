import React from 'react';

function Gate ({isOpen}){
    return (
        <div>Gate is {isOpen ? "Open" : "Closed"}</div>
    )
}

export default Gate