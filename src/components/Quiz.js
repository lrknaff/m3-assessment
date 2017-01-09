import React, { Component } from 'react';

export default class Quiz extends Component {

  render() {
    return (
      <div className="quiz-container">
        <h2>{this.props.data[0].title}</h2>
      </div>
    );
  }
}
