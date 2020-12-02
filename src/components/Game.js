import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import * as a from './../actions';
import Board from './Board';
import calculateWinner from './../helpers/winner';

class Game extends React.Component {
  handleClick(i) {
    const { dispatch } = this.props;
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const action = a.deleteBoard(this.props.stepNumber);
    dispatch(action);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    const action2 = a.addBoard(squares);
    dispatch(action2);
    const action3 = a.toggle(); 
    dispatch(action3);
    const action4 = a.addStep();
    dispatch(action4);
  }

  jumpTo(step) {
    const { dispatch } = this.props
    if ((step % 2 === 0 && this.props.xIsNext === false) || (step % 2 !== 0 && this.props.xIsNext === true)) {
      const action = a.toggle();
      dispatch(action);
    } 
    const action2 = a.resetStep(step); 
    dispatch(action2);
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

export default Game;    