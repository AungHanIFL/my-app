import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({ value: event.target.value })
    }

    handleSubmit(event){
        alert(this.state.username)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

Form.propTypes = {
    username: PropTypes.string
}

export default Form;