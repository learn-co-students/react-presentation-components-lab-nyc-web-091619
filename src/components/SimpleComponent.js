// Code SimpleComponent Here
import React from 'react';

class SimpleComponent extends React.Component {
    state = {
        mood: "happy"
      }

    handleClick = e => {
        switch (this.state.mood) {
            case "happy":
                this.setState({
                    mood: "sad"
                })
                break;
            default:
                this.setState({
                    mood: "happy"
                })
                break;
        }
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        );
    }
}

export default SimpleComponent;