import React, { Component } from "react";
import "./Tile.css";

class Tile extends Component {

    handleTopLeft(rowOrCol) {
        switch (rowOrCol) {
            case 0:
            case 3:
            case 6:
                return true;
            default:
                return false;
        }
    }

    handleBottomRight(rowOrCol) {
        switch (rowOrCol) {
            case 2:
            case 5:
            case 8:
                return true;
            default:
                return false;
        }
    }

    handleCorners(top, right, bottom, left) {
        let corners = "";
        if (top) {
            corners += " top";
        }
        if (right) {
            corners += " right";
        }
        if (bottom) {
            corners += " bottom";
        }
        if (left) {
            corners += " left";
        }
        return corners;
    }

    render() {
        let top = this.handleTopLeft(this.props.rowIndex)
        let right = this.handleBottomRight(this.props.colIndex)
        let bottom = this.handleBottomRight(this.props.rowIndex)
        let left = this.handleTopLeft(this.props.colIndex)
        let corners = this.handleCorners(top, right, bottom, left);

        if (this.props.shown) {
            return (
                <span className={`tile ${corners}`} id={this.props.id}>
                    {this.props.number}
                </span>
            )
        }
        else {
            return (
                <input onChange={this.props.onChange} className={`tile ${corners}`} id={this.props.id} rowindex={this.props.rowIndex} colindex={this.props.colIndex} placeholder={this.props.number}>
                </input>
            )
        }

    }
}

export default Tile;