import React, { Component } from "react";
import "./MessageBar.css";
import Row from "../Row";

class MessageBar extends Component {

    render() {
        return (
            <div>
                <Row center padded message>
                    <h6>{`Puzzles Completed:  ${this.props.count}`}</h6>
                </Row>
                <Row center padded message>
                    <h5 className="message">{this.props.message}</h5>
                </Row>
            </div>
        )
    }

}

export default MessageBar;



