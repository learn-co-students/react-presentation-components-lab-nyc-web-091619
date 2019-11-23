// Code SimpleComponent Here
import React, { Component } from 'react'

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