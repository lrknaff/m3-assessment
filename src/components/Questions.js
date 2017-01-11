import React, { Component } from 'react';
import Answer from './Answer.js'

export default class Questions extends Component {
  render() {
    const { title, answers, id, score, handleScore, checked } = this.props
    return (
      <div className="question">
        <h3 className="question-title">{title}</h3>
        {answers.map((answer, i) =>
          <Answer
            key={i}
            id={id}
            answer={answer}
            score={score}
            handleScore={handleScore}
            checked={checked}
          />
        )}
      </div>
    );
  }
}
