// Code SimpleComponent Here
import React, { Component } from 'react'

// set up an object that stores key value pairs
// for the different moods we can have.

var moods = {
    "sad" : "happy",
    "happy" : "sad"
}

export default class SimpleComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mood: "happy"
        };

    }
    
    handleClick = ()=> {
        // let changeMood = (this.state.mood === "happy") ? "sad" : "happy"
        
        // look up our opposite mood in the moods array and
        // set our variable changeMood to the opposite mood
        // and setState()
        let changeMood = moods[this.state.mood]
        return this.setState({
            mood: changeMood
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}