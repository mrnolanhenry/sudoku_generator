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
    board: utils.createBoard(),
    correct: false,
    difficulty: "medium"
  }

  // componentDidMount = () => {
  //   // let newBoard = utils.populateBoardArray();
  //   // this.setState({ board: newBoard })
  // }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleNextBoard = (e) => {
    e.preventDefault()
    this.setState({
      board: utils.createBoard(this.state.difficulty)
    });
    var puzzleForm = document.getElementById('puzzle');
    puzzleForm.reset();
  };


  render() {

    const mapSquares =
      this.state.board.map((row, rowIndex) => {
        return <Row center key={rowIndex}>
          {row.map((square, colIndex) => {
            return <Square rowIndex={rowIndex} colIndex={colIndex} key={`${rowIndex},${colIndex}`} id={`${rowIndex},${colIndex}`} number={square.number} revealed={square.revealed} />
          })}
        </Row>
      })


    return (
      <div className="container-fluid">
        <Header />
        <Row center>
          <Col center>
            <Puzzle>
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
