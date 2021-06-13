import React from 'react'


const ComicLi = (props) => {
    // debugger
    

    return (
        <div>
            <h1>{props.comic.title}</h1>
            <button onClick={() => props.deleteTheOrder(props.comic.id)}>Order Fulfilled</button>
        </div>
    )
}

export default ComicLi