import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import rootReducer from './reducers/index';
import PropTypes from 'prop-types';

const store = createStore(rootReducer);

// Square ************************************
function Square (props) {
    return (
      <button 
        className="square" 
        onClick={props.onClick} >
        {props.value}
      </button>
    );

}
// Board ************************************
class Board extends React.Component {
  renderSquare(i) {
    return (
    <Square  
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />
    );
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// Game ************************************
class Game extends React.Component {
  handleClick(i) {
    const { dispatch } = this.props;
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const action = {
      type: 'DELETE_BOARD',
      stepNumber: this.props.stepNumber
    }
    dispatch(action)
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    // Update history
    const action2 = {
      type: 'ADD_BOARD',
      squares: squares
    }
    dispatch(action2);
    // Update xIsNext
    const action3 = {
      type: 'TOGGLE'
    }
    dispatch(action3);
    // Update stepNumber
    const action4 = {
      type: 'ADD_STEP'
    }
    dispatch(action4);
  }

  jumpTo(step) {
    const { dispatch } = this.props
    if ((step % 2 === 0 && this.props.xIsNext === false) || (step % 2 !== 0 && this.props.xIsNext === true)) {
      const action = {
        type: 'TOGGLE'
      }
      dispatch(action)
    } 
    const action2 = {
      type: 'RESET_STEP',
      step: step
    }
    dispatch(action2)
  }

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    xIsNext: state.xIsNext,
    history: state.history,
    stepNumber: state.stepNumber
  }
}

Game.propTypes = {
  xIsNext: PropTypes.bool,
  history: PropTypes.array,
  stepNumber: PropTypes.number
}

Game = connect(mapStateToProps)(Game);

// ========================================
 // 
ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);

// Helper Function ************************************
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}