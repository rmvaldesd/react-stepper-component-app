import './App.css';
import React, { Component } from 'react';
import StepperBar from './components/stepper-bar/stepper-bar';

export default class App extends Component {
  state = {
      counter: 0
    }
   

  increment = () => {
    this.setState({counter: this.state.counter + 1});
  }

  decrement = () => {
    this.setState({counter: this.state.counter - 1});
  }

  render(){
    return(<div className="App">
      <StepperBar currentStep={this.state.counter} / >
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    </div>);
  }
}

