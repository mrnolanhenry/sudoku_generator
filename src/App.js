import React from 'react';
import './App.css';
import * as utils from './utils.js';
import Square from "./components/Square";
import Col from "./components/Col";
import Row from "./components/Row";
import Header from "./components/Header";

class App extends React.Component {
  state = {
    board: utils.populateBoardArray()
  }

  componentDidMount = () => {
    // let newBoard = utils.populateBoardArray();
    // this.setState({ board: newBoard })
  }
  

  render() {

    const mapSquares =
      this.state.board.map((row, rowIndex) => {
        return <Row center key={rowIndex}>
          {row.map((square, colIndex) => {
            return <Square rowIndex={rowIndex} colIndex={colIndex} key={`${rowIndex},${colIndex}`} id={`${rowIndex},${colIndex}`} number={square} />
          })}
        </Row>
      })


    return (
      <div className="container-fluid">
        <Header />
        <Row center>
          <Col center>
            {mapSquares}
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;
