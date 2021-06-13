import React from 'react'
import { Link } from 'react-router-dom'

const ClientLink = ({client}) => {
    return (
        <div>
            <Link to={`/clients/${client.id}`}>
                <h3>{client.name}</h3>
            </Link>
        </div>
    )
}

export default ClientLink