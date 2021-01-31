import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import { getSecretWord } from './actions';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  success: state.success,
  secretWord: state.secretWord,
  guessedWords: state.guessedWords
});

export default connect(mapStateToProps, { getSecretWord })(App);