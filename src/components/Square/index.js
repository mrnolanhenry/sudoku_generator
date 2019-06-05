import React, { Component } from "react";
// import "./style.css";

class Square extends Component {

    render() {
        return (
            <span className="square">
                <button id={this.props.id}> {this.props.number}
                </button>
            </span>
        )
    }
}

export default Square;