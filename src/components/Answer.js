import React, { Component } from 'react';

export default class Answer extends Component {
  render() {
    const { id, answer, handleScore, checked } = this.props
    return (
      <div className="answer-container">
        <label>
          <input
            type="radio"
            value={answer.score}
            name={id}
            required
            onClick={handleScore}
            checked={checked}
          />
          {answer.title}
        </label>
      </div>
    );
  }
}
