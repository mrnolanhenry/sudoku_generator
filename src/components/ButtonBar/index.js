import React, { Component } from "react";
import "./ButtonBar.css";
import Row from "../Row"
import Button from "../Button";

class ButtonBar extends Component {

    render() {
        return (
            <Row center marginTop>
                <Button className="btn-submit-puzzle" type="button" onClick={this.props.handleAttempt} name="action">
                    Submit
                </Button>
                <Button className="btn-show-solved" type="button" onClick={this.props.showSolved} name="action">
                    Show Solved
                </Button>

                <select
                    onChange={this.props.handleDifficulty}
                    name='difficulty'
                    defaultValue={this.props.difficulty}>
                    <option value={this.props.difficulty} disabled className="text-hide">Select difficulty</option>
                    <option>beginner</option>
                    <option>easy</option>
                    <option>medium</option>
                    <option>hard</option>
                    <option>expert</option>
                </select>

                <Button className="btn-next-puzzle" type="button" onClick={this.props.handleNextBoard} name="action">
                    New Puzzle
                </Button>
            </Row>
        )
    }
}

export default ButtonBar;