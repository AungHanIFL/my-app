import React, { Component } from 'react';
import PropTypes from 'prop-types';

// two ways to define components
// 1) Function style (latest)
// 2) class style

export class BlogPost extends React.Component{
    constructor(props){
        super(props)
        this.state =  { 
            clicked: false,
            fruits: props.fruits
         };
    }

   displayFruits() {
       this.state.fruits.map(i => <li>{i}</li>)
    }


    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <p>Clicked : {(this.state.clicked === true ? "yes" : "no")}</p>
                <button onClick={() => {
                    this.setState({clicked: !this.state.clicked});
                    this.displayFruits();
            }}>show me</button>
            <ol> {this.state.fruits}             
            </ol>
            </div>
        )
    }
}

// define types
BlogPost.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    fruits: PropTypes.arrayOf(PropTypes.string)
}

export default BlogPost;