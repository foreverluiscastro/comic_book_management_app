import React, { Component } from 'react'

class ComicForm extends Component {
    state = {
        title: "",
        publisher: "",
        creators: "",
        img_url: "",
        price: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addAnOrder(this.state)
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label><br/>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <br/>
                    <label>Publisher:</label><br/>
                    <input type="text" name="publisher" value={this.state.publisher} onChange={this.handleChange}/>
                    <br/>
                    <label>Creator(s):</label><br/>
                    <input type="text" name="creators" value={this.state.creators} onChange={this.handleChange}/>
                    <br/>
                    <label>Img URL:</label><br/>
                    <input type="text" name="img_url" value={this.state.img_url} onChange={this.handleChange}/>
                    <br/>
                    <label>Price:</label><br/>
                    $<input type="text" name="price" value={this.state.price} onChange={this.handleChange}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default ComicForm