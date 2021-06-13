import React from 'react'


const ClientLi = (props) => {
    // debugger
    

    return (
        <div>
            <h1>{props.client.name}</h1>
            <button onClick={() => props.deleteThisClient(props.client.id)}>Close Account</button>
        </div>
    )
}

export default ClientLi