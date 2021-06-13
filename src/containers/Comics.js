import React, {useState, useEffect} from 'react'
import ComicLink from '../components/ComicLink'

const Comics = () => {
    const [comics, setComics] = useState([])
    // const [comicFormFlag, setComicFormFlag] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9292/comics')
        .then(r => r.json())
        .then(data => {
            // console.log(data)
            setComics(data)
        })
    }, [])

    const comicsList = comics.map(c => <ComicLink key={c.id} comic={c}/>)

    return (
        <div>
            <h1>Comic Orders</h1>
            <ul>
                {comicsList}
            </ul>
        </div>
    )
}

export default Comics