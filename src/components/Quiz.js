import React, { Component } from 'react';
import Questions from './Questions.js';
import axios from 'axios';

export default class Quiz extends Component {
  constructor() {
  super()
      this.state = {
        totalScore: 0,
        currentScores: {},
        questionLength: 0,
        checked: null,
      }
    }

  handleScore(e) {
    let score = parseInt(e.target.value)
    let id = e.target.name
    this.state.currentScores[id] = score
    console.log(this.state.currentScores)
    this.currentScoresLength()
    this.setState({ checked: null })
  }

  handleTotal(e) {
    let totalArray = Object.values(this.state.currentScores);
    let total = totalArray.reduce(function(a, b) {
      return a + b;
    }, 0);
    this.setState({ totalScore: total })
    this.postScore()
  }

  currentScoresLength() {
    let count = 0
    for(var i in this.state.currentScores) {
      if (this.state.currentScores.hasOwnProperty(i)) {
        count ++
        this.setState({ questionLength: count })
      }
    }
  }

  handleClear(e) {
    e.preventDefault
    this.setState({totalScore: 0, currentScores: {}, questionLength: 0, checked: false})
  }

  postScore() {
    axios.post('/scores', {
      score: this.state.totalScore,
    })
    .then(function (response) {
    console.log(response);
    })
  }


  render() {
    return (
      <div className="quiz-container">
        <header>
          <h2>{this.props.data[0].title}</h2>
        </header>
        <h4>score: {this.state.totalScore}</h4>
        {this.props.data[0].questions.map(questions =>
          <Questions
            key={questions.id}
            title={questions.title}
            answers={questions.answers}
            id={questions.id}
            score={this.state.score}
            handleScore={this.handleScore.bind(this)}
            checked={this.state.checked}
          />
        )}
        <input
          className="submit-button"
          type="submit"
          value="submit"
          onClick={this.handleTotal.bind(this)}
          disabled={this.state.questionLength < this.props.data[0].questions.length ? true : false}
        />
        <input
          className="submit-button"
          type="submit"
          value="clear"
          onClick={this.handleClear.bind(this)}
          disabled={this.state.questionLength ? false : true}
        />
      </div>
    );
  }
}
