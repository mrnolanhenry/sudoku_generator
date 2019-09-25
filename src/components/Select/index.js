import React, { Component } from "react";
import "./Select.css";

class Select extends Component {

    render() {
        return (
            <select
                onChange={this.props.onChange}
                name= {this.props.name}
                defaultValue={this.props.defaultValue}>
                <option value={this.props.defaultValue} disabled className={this.props.className}>Select difficulty</option>
                <option>beginner</option>
                <option>easy</option>
                <option>medium</option>
                <option>hard</option>
                <option>expert</option>
            </select>
        )
    }
}

export default Select;


