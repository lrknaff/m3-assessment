import React, { Component } from 'react';
import Questions from './Questions.js'
import axios from 'axios';

export default class Quiz extends Component {
  constructor() {
    super()
    this.state = {

    }
  }


  render() {
    return (
      <div className="quiz-container">
        <header>
          <h2>{this.props.data[0].title}</h2>
        </header>
        {/* <h4>score: {this.state.totalScore}</h4> */}
        {this.props.data[0].questions.map(questions =>
          <Questions
            key={questions.id}
            title={questions.title}
            answers={questions.answers}
            id={questions.id}
          />
        )}
        <input
          className="submit-button"
          type="submit"
          value="submit"
        />
        <input
          className="submit-button"
          type="submit"
          value="clear"
        />
      </div>
    );
  }
}
