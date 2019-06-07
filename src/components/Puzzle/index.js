import React, { Component } from "react";
// import "./Col.css";

class Puzzle extends Component {

    render() {

        return (
            <form id="puzzle" onSubmit={this.props.onSubmit}>
                {this.props.children}
            </form>
        )
    }
}

export default Puzzle;