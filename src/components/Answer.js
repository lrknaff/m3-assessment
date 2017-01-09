import React, { Component } from 'react';

export default class Answer extends Component {
  render() {
    const { id, answer } = this.props
    return (
      <div className="answer-container">
        <label>
          <input
            type="radio"
            value={answer.score}
            name={id}
          />
          {answer.title}
        </label>
      </div>
    );
  }
}
