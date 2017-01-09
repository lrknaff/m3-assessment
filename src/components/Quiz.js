import React, { Component } from 'react';
import Questions from './Questions.js'
import Answer from './Answer.js'

export default class Quiz extends Component {

  render() {
    return (
      <div className="quiz-container">
        <h2>{this.props.data[0].title}</h2>
        {this.props.data[0].questions.map(questions =>
          <Questions
            key={questions.id}
            title={questions.title}
            answers={questions.answers}
            id={questions.id}
          />
        )}
        <input type="submit" value="submit" />
      </div>
    );
  }
}
