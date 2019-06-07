import React, { Component } from "react";
import Row from "../Row"
import "./Puzzle.css";

class Puzzle extends Component {

    render() {

        return (
            <form id="puzzle" onSubmit={this.props.onSubmit}>
                {this.props.children}
                <Row center padded>
                <button
                    className="btn-submit-puzzle"
                    type="submit"
                    name="action">
                    Submit
                </button>

                <button
                    className="btn-show-solved"
                    type="button"
                    onClick = {this.props.onClick}
                    name="action">
                    Show Solved
                </button>
                </Row>
            </form>
            
        )
    }
}

export default Puzzle;