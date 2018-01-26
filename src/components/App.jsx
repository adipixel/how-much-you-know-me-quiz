import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Result from './quiz/Result.jsx';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is my favorite color?',
          choices: [
            {
              id: 'a',
              text: 'Blue'
            },
            {
              id: 'b',
              text: 'Green'
            },
            {
              id: 'c',
              text: 'Red'
            },
            {
              id: 'd',
              text: 'Yellow'
            },
          ],
          correct: 'c'
        },
        {
          id: 2,
          text: 'What is my favorite language?',
          choices: [
            {
              id: 'a',
              text: 'Javascript'
            },
            {
              id: 'b',
              text: 'Ruby'
            },
            {
              id: 'c',
              text: 'Python'
            },
            {
              id: 'd',
              text: 'Java'
            },
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'What is my favorite OS?',
          choices: [
            {
              id: 'a',
              text: 'MacOS'
            },
            {
              id: 'b',
              text: 'Windows'
            },
            {
              id: 'c',
              text: 'IOS'
            },
            {
              id: 'd',
              text: 'Android'
            },
          ],
          correct: 'b'
        },
        {
          id: 4,
          text: 'What is my favorite game?',
          choices: [
            {
              id: 'a',
              text: 'Chess'
            },
            {
              id: 'b',
              text: 'Baseball'
            },
            {
              id: 'c',
              text: 'Soccer'
            },
            {
              id: 'd',
              text: 'Cricket'
            },
          ],
          correct: 'd'
        }
      ],
      score: 0,
      current: 1
    }
  }

  setCurrent(current){
    this.setState({current});
  }

  setScore(score){
    this.setState({score});
  }

  render(){
    if(this.state.current > this.state.questions.length){
      var scorebox = ''
      var result = <Result {...this.state}/>
    }
    else {
      var scorebox = <Scorebox {...this.state}/>
      var result = ''
    }
    return(
      <div>
        {scorebox}
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
        {result}
      </div>
    );
  }
}

export default App
