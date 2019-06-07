import React, { Component } from "react";
import "./NextPuzzle.css";

class NextPuzzle extends Component {

    render() {

        return <div className="input-field">
            <form onSubmit={this.props.onSubmit}>
                <select
                    onChange={this.props.onChange}
                    name='difficulty'
                    defaultValue={this.props.difficulty}>
                    <option value="medium" disabled className="text-hide">Select difficulty</option>
                    <option>easy</option>
                    <option>medium</option>
                    <option>hard</option>
                    <option>expert</option>
                </select>

                <button
                    className="btn-next-puzzle"
                    type="submit"
                    name="action">
                    New Puzzle
                </button>
            </form>
        </div>
    }
}

export default NextPuzzle;


