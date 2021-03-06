import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Result extends Component{
  render(){
    var percent = (this.props.score / this.props.questions.length)*100;
    if(percent>80){
      var message = "Awesome job!";
    }
    else if (percent > 60) {
      var message = "You did OK!";
    }
    else {
      var message = "You did horrible!";
    }

    return(
      <div className="card card-body bg-faded">
        <h4> You got {this.props.score} out of {this.props.questions.length} correct! </h4>
        <h1>{percent}% - {message}</h1>
        <hr />
        <a href="/app">Take Again</a>
      </div>
    );
  }
}

export default Result
