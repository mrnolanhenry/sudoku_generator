import React, { Component } from "react";
import "./Form.css";

class Form extends Component {

    render() {
        return (
                <form id={this.props.id} onSubmit={this.props.onSubmit}>
                    {this.props.children}
                </form>
        )
    }
}

export default Form;


