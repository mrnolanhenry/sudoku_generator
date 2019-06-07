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
                </Row>
            </form>
            
        )
    }
}

export default Puzzle;