import React, {useState, useEffect} from 'react'
import ClientLink from '../components/ClientLink'
import ClientForm from './ClientForm'

const Clients = () => {
    const [clients, setClients] = useState([])
    const [clientFormFlag, setClientFormFlag] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9292/clients')
        .then(r => r.json())
        .then(data => {
            // console.log(data)
            setClients(data)
        })
    }, [])

    const toggleClientForm = (e) => {
        setClientFormFlag(true)
    }

    const addClient = (client) => {
        // tell backend, add to state, toggle form
        fetch('http://localhost:9292/clients', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(client)
        })
        .then(r => r.json())
        .then(data => {
            setClients([...clients, data])
        })
        setClientFormFlag(false)
    }

    const clientsList = clients.map(c => <ClientLink key={c.id} client={c}/>)

    return (
        <div>
            <h1>Clients</h1>
            <ul>
                {clientsList}
            </ul>
            {clientFormFlag ? <ClientForm addAClient={addClient}/> : <button onClick={toggleClientForm}>Add Client</button>}
        </div>
    )
}

export default Clients