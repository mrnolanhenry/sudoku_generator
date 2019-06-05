import React from 'react';
import './App.css';
import * as utils from './utils.js';
import Square from "./components/Square";
import Row from "./components/Row";

class App extends React.Component {
  state = {
    board: utils.populateBoard()
  }

  componentDidMount = () => {
    let newBoard = utils.populateBoard();
    this.setState({ board: newBoard })
  }

  render() {

    const mapSquares =
      this.state.board.map(row => {
        return <Row> 
          {row.map(square => {
          return <Square key={Square.id} number={square} />
        })}
        </Row>
      })


    return (
      <div className="container-fluid">
        <div className="row row-center">
        </div>
        <main className="container">
          <div className="row row-center">
            {mapSquares}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
