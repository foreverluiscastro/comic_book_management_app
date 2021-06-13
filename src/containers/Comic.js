import React, { useState, useEffect } from 'react'


const Comic = (props) => {
    // debugger
    const [comic, setComic] = useState({
        comic: []
    })

    useEffect(() => {
        
        fetch(`http://localhost:9292/comics/${props.match.params.id}`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setComic(data)
        })
    }, [props.match.params.id])
    

    return (
        <div>
            <h1>{comic.title}</h1>
            <h2>Publisher: {comic.publisher}</h2>
            <h3>Creator(s): {comic.creators}</h3>
            <img src={comic.img_url} alt=""/>
            <p>${comic.price}</p>
        </div>
    )
}

export default Comic