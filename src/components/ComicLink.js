import React from 'react'
import { Link } from 'react-router-dom'

const ComicLink = ({comic}) => {
    return (
        <div>
            <Link to={`/comics/${comic.id}`}>
                <h3>{comic.title}</h3>
            </Link>
        </div>
    )
}

export default ComicLink