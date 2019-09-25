import React from 'react';
import './App.css';
import * as utils from './utils.js';
import Tile from "./components/Tile";
import Col from "./components/Col";
import Row from "./components/Row";
import Header from "./components/Header";
import MessageBar from "./components/MessageBar";
import Button from "./components/Button";
import Form from "./components/Form";
import Select from "./components/Select";
import Puzzle from "./components/Puzzle";

class App extends React.Component {
  state = {
    board: [],
    attempt: [],
    correct: false,
    difficulty: "medium",
    message: "",
    count: 0,
    solverMode: false
  }

  componentDidMount = () => {
    let newBoard = utils.createBoard()
    let newAttempt = utils.getShown(newBoard)
    this.setState({
      board: newBoard,
      attempt: newAttempt
    })
  }

  handleDifficulty = (e) => {
    // console.log('fire handleDifficulty')
    // FIRES
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleNextBoard = (e) => {
    e.preventDefault();
    // console.log('fire handleNextBoard')
    // FIRES
    let newBoard = utils.createBoard(this.state.difficulty);
    let newAttempt = utils.getShown(newBoard)
    this.setState({
      board: newBoard,
      attempt: newAttempt,
      message: "",
      correct: false
    })
    var puzzleForm = document.getElementById('puzzle');
    console.log(puzzleForm);
    // puzzleForm.reset();
  };

  handleAttempt = (e) => {
    e.preventDefault();
    // console.log('fire handleAttempt')
    //  FIRES
    let newAttempt = this.state.attempt;
    if (utils.isCorrect(newAttempt) && !(this.state.correct)) {
      let prevCount = this.state.count
      this.setState({
        correct: true,
        message: "Correct!",
        count: prevCount + 1
      })
    }
    else if (utils.isCorrect(newAttempt)) {
      this.setState({
        message: "Try a new puzzle!"
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
        shownRow.push({ number: tile.number, shown: true })
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
    let val = e.target.value.replace(/\s/g, '')
    currentFill[rowIndex][colIndex] = parseInt(val);
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
        <Row center marginTop>
          <Col center>
            <Puzzle>
              {mapTiles}
            </Puzzle>
          </Col>
        </Row>
        <Row center marginTop>
          <Col center>
            <Form onSubmit={this.handleAttempt}>
              <Button className="btn-submit-puzzle" type="submit" name="action">
                Submit
              </Button>
              <Button className="btn-show-solved" type="button" onClick={this.showSolved} name="action">
                Show Solved
              </Button>
            </Form>
            <div className="input-field">
              <Form onSubmit={this.handleNextBoard}>
                <Select
                  onChange={this.handleDifficulty}
                  name='difficulty'
                  defaultValue={this.state.difficulty}>
                  <option value="medium" disabled className="text-hide">Select difficulty</option>
                  <option>beginner</option>
                  <option>easy</option>
                  <option>medium</option>
                  <option>hard</option>
                  <option>expert</option>
                </Select>

                <Button className="btn-next-puzzle" type="submit" name="action">
                  New Puzzle
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;
