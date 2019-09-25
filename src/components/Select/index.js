import React, { Component } from "react";
import "./Select.css";

class Select extends Component {

    render() {
        return (
            <select
                onChange={this.props.onChange}
                name= {this.props.name}
                defaultValue={this.props.defaultValue}>
                    {this.props.children}
            </select>
        )
    }
}

export default Select;


