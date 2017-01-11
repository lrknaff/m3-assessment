import React, { Component } from 'react';
import Questions from './Questions.js'

export default class Quiz extends Component {
  constructor() {
  super()
      this.state = {
        totalScore: 0,
        currentScores: {},
      }
    }

  handleScore(e) {
    let score = parseInt(e.target.value)
    let id = e.target.name
    this.state.currentScores[id] = score
    console.log(this.state.currentScores)
  }

  handleTotal(e) {
    let totalArray = Object.values(this.state.currentScores);
    let total = totalArray.reduce(function(a, b) {
      return a + b;
    }, 0);
    this.setState({ totalScore: total })
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
            addScore={this.handleScore.bind(this)}
          />
        )}
        <input
          className="submit-button"
          type="submit"
          value="submit"
          onClick={this.handleTotal.bind(this)}
        />
      </div>
    );
  }
}
