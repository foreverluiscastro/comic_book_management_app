import React, { useState, useEffect } from 'react'
import ComicForm from './ComicForm'
import ComicLi from '../components/ComicLi'


const Client = (props) => {
    const [client, setClient] = useState({
        comics: []
    })

    const [comicFormFlag, setComicFormFlag] = useState(false)

    useEffect(() => {
        
        fetch(`http://localhost:9292/clients/${props.match.params.id}`)
        .then(r => r.json())
        .then(data => {
            setClient(data)
        })
    }, [props.match.params.id])

    const addOrder = (comic) => {
        fetch(`http://localhost:9292/clients/${client.id}/comics`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comic)
        })
        .then(r => r.json())
        .then(data => {
            setClient({
                ...client,
                comics: [...client.comics, data]
            })
        })
        setComicFormFlag(false)
    }

    const deleteOrder = (id) => {
        // console.log(id)
        fetch(`http://localhost:9292/clients/${client.id}/comics/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(() => {
            const newComics = client.comics.filter(c => c.id !==id)
            setClient({
                ...client,
                comics: newComics
            })
        })
    }

    const comics = client.comics.map( c => <ComicLi key={c.id} comic={c} deleteTheOrder={deleteOrder}/>)

    return (
        <div>
            <br/>
            <h1>{client.name}</h1>
            <h2>{client.phone_number}</h2>
            <h3>{client.email}</h3>
            <hr/>
            <h3>Comics:</h3>
            <ul>{comics}</ul>
            <br/>
            <br/>
            {comicFormFlag ? <ComicForm addAnOrder={addOrder} client={client}/> : <button onClick={() => setComicFormFlag(true)}>Add Comic</button>}
        </div>
    )
}

export default Client