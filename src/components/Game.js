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
