import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      timerRunning: false,
    };
    this.timer = null; // To store the timer reference
  }

  componentDidMount() {
    console.log('Counter component has mounted!');
  }

  componentWillUnmount() {
    console.log('Counter component is unmounting!');
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  startTimer = () => {
    if (!this.state.timerRunning) {
      this.timer = setInterval(() => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
      }, 1000);
      this.setState({ timerRunning: true });
    }
  };

  stopTimer = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ timerRunning: false });
    }
  };

  resetCounter = () => {
    this.stopTimer();
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="counter-container">
        <h1>Class-Based Counter</h1>
        <h2>Count: {this.state.count}</h2>
        <div className="buttons">
          <button onClick={this.startTimer} disabled={this.state.timerRunning}>
            Start Timer
          </button>
          <button onClick={this.stopTimer} disabled={!this.state.timerRunning}>
            Stop Timer
          </button>
          <button onClick={this.resetCounter}>Reset</button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true,
    };
  }

  toggleCounter = () => {
    this.setState((prevState) => ({
      showCounter: !prevState.showCounter,
    }));
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleCounter}>
          {this.state.showCounter ? 'Hide Counter' : 'Show Counter'}
        </button>
        {this.state.showCounter && <Counter />}
      </div>
    );
  }
}

export default App;
