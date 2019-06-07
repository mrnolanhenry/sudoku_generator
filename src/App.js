import React from 'react';
import './App.css';
import * as utils from './utils.js';
import Square from "./components/Square";
import Col from "./components/Col";
import Row from "./components/Row";
import Header from "./components/Header";
import NextPuzzle from "./components/NextPuzzle";
import Puzzle from "./components/Puzzle";

class App extends React.Component {
  state = {
    board: [],
    attempt: [],
    correct: false,
    difficulty: "medium"
  }

  componentDidMount = () => {
    let newBoard = utils.createBoard()
    this.setState({ 
      board: newBoard,
      attempt: utils.getShown(newBoard) })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleNextBoard = (e) => {
    e.preventDefault();
    let newBoard = utils.createBoard(this.state.difficulty);
    this.setState({
      board: newBoard,
      attempt: utils.getShown(newBoard)
    })
    var puzzleForm = document.getElementById('puzzle');
    puzzleForm.reset();
  };

  handleAttempt = (e) => {
    e.preventDefault();
    // TODO: check if this.state.attempt is valid board

  }

  handleFill = (e) => {
    let currentFill = this.state.attempt;
    let rowIndex = e.target.getAttribute('rowindex');
    let colIndex = e.target.getAttribute('colindex');
    currentFill[rowIndex][colIndex] = parseInt(e.target.value);
    console.log(currentFill)
    this.setState({
      attempt: currentFill
    });
  }

  render() {
    var mapSquares = [];
    if (this.state.board.length > 0) {
      mapSquares = this.state.board.map((row, rowIndex) => {
        return <Row center puzzle key={rowIndex}>
          {row.map((square, colIndex) => {
            return <Square onChange={this.handleFill} rowIndex={rowIndex} colIndex={colIndex} key={`${rowIndex},${colIndex}`} id={`${rowIndex},${colIndex}`} number={square.number} shown={square.shown} />
          })}
        </Row>
      })
    }

    return (
      <div className="container-fluid">
        <Header />
        <Row center>
          <Col center>
            <Puzzle onSubmit={this.handleAttempt}>
              {mapSquares}
            </Puzzle>
          </Col>
        </Row>
        <Row center padded>
          <Col center>
            <NextPuzzle onSubmit={this.handleNextBoard} onChange={this.handleChange} difficulty={this.state.difficulty} />
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;
