import React, { Component } from "react";
import "./Puzzle.css";

class Puzzle extends Component {

    render() {

        return (
            <div id="puzzle">
                {this.props.children}
            </div>   
        )
    }
}

export default Puzzle;