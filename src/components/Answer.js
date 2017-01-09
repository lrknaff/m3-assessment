import React, { Component } from 'react';

export default class Answer extends Component {
  render() {
    const { id, answer } = this.props
    return (
      <div className="answer-container">
        <label>
          <input
            type="radio"
          />
          {answer.title}
        </label>
      </div>
    );
  }
}
