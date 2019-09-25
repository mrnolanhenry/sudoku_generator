import React, { Component } from "react";
import "./Button.css";

class Button extends Component {

    render() {
        return (
            <button
                className={this.props.className}
                onSubmit={this.props.onSubmit}
                onClick={this.props.onClick}
                type={this.props.type}
                name={this.props.name}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;