import React from 'react';
import './App.css';
import * as utils from './utils.js';
import Tile from "./components/Tile";
import Col from "./components/Col";
import Row from "./components/Row";
import Header from "./components/Header";
import MessageBar from "./components/MessageBar";
import NextPuzzle from "./components/NextPuzzle";
import Puzzle from "./components/Puzzle";

class App extends React.Component {
  state = {
    board: [],
    attempt: [],
    correct: false,
    difficulty: "medium",
    message: "",
    count: 0
  }

  componentDidMount = () => {
    let newBoard = utils.createBoard()
    this.setState({ 
      board: newBoard,
      attempt: utils.getShown(newBoard) })
  }

  handleDifficulty = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleNextBoard = (e) => {
    e.preventDefault();
    let newBoard = utils.createBoard(this.state.difficulty);
    this.setState({
      board: newBoard,
      attempt: utils.getShown(newBoard),
      message: "",
      correct: false
    })
    var puzzleForm = document.getElementById('puzzle');
    puzzleForm.reset();
  };

  handleAttempt = (e) => {
    e.preventDefault();
    if (utils.isCorrect(this.state.attempt)) {
      let prevCount = this.state.count
      this.setState({
        correct: true,
        message: "Correct!",
        count: prevCount + 1
      })
    }
    else {
      this.setState({
        message: "Try again!"
      })
    }
  }

  showSolved = () => {
    let shownBoard = [];
    this.state.board.forEach(row => {
      let shownRow = [];
      row.forEach(tile => {
          shownRow.push({number: tile.number, shown: true})
        })
      shownBoard.push(shownRow);
    })
    this.setState({
      board: shownBoard
    })
  }

  handleFill = (e) => {
    let currentFill = this.state.attempt;
    let rowIndex = e.target.getAttribute('rowindex');
    let colIndex = e.target.getAttribute('colindex');
    currentFill[rowIndex][colIndex] = parseInt(e.target.value);
    this.setState({
      attempt: currentFill
    });
  }

  render() {
    var mapTiles = [];
    if (this.state.board.length > 0) {
      mapTiles = this.state.board.map((row, rowIndex) => {
        return <Row center puzzle key={rowIndex}>
          {row.map((tile, colIndex) => {
            return <Tile onChange={this.handleFill} rowIndex={rowIndex} colIndex={colIndex} key={`${rowIndex},${colIndex}`} id={`${rowIndex},${colIndex}`} number={tile.number} shown={tile.shown} />
          })}
        </Row>
      })
    }

    return (
      <div className="container-fluid">
        <Header />
        <MessageBar message={this.state.message} count={this.state.count} />
        <Row center padded>
          <Col center>
            <Puzzle onSubmit={this.handleAttempt} onClick={this.showSolved}>
              {mapTiles}
            </Puzzle>
          </Col>
        </Row>
        <Row center padded>
          <Col center>
            <NextPuzzle onSubmit={this.handleNextBoard} onChange={this.handleDifficulty} difficulty={this.state.difficulty} />
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;
