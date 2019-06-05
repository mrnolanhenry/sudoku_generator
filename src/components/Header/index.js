import React, { Component } from "react";
import "./Header.css";
import Row from "../Row";

class Header extends Component {

    render() {
        return (
            <header className="header">
                <Row center>
                    <h2>Sudoku Generator</h2>
                </Row>
            </header>
        )
    }

}

export default Header;



