import React, { Component } from "react";
import "./Option.css";

class Option extends Component {

    render() {
        return (
            <option value={this.props.value} disabled={this.props.disabled} className={this.props.className}>{this.props.children}</option>
        )
    }
}

export default Option;
