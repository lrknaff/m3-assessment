import React, { Component } from 'react';
import axios from 'axios';
import Quiz from './Quiz.js';

class App extends Component {
  constructor() {
  super()
      this.state = {
        quizzes: null,
      }
    }

  componentDidMount() {
    this.getQuiz()
  }

  getQuiz() {
    axios.get('/quizzes')
    .then((response) => {
      this.setState({ quizzes: response.data.quizzes })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.quizzes ?
          <Quiz data={this.state.quizzes}/> :
          <p>Loading...</p>
        }
      </div>
    );
  }
}

export default App;
