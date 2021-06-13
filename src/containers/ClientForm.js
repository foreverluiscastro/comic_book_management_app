import React, { Component } from 'react'

class ClientForm extends Component {
    state = {
        name: "",
        phone_number: "",
        email: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addAClient(this.state)
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label><br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <br/>
                    <label>Phone Number:</label><br/>
                    <input type="text" name="phone_number" value={this.state.phone_number} onChange={this.handleChange}/>
                    <br/>
                    <label>Email:</label><br/>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default ClientForm