import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      seconds: 0
    };
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.reset = this.reset.bind(this);
  }

  pause() {
    this.setState({ start: false });
    clearInterval(this.intervalId);
  }

  play() {
    this.intervalId = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
    this.setState({ start: true });
  }

  reset() {
    this.setState({ seconds: 0 });
  }

  render() {
    if (this.state.start === false) {
      return (
        <div>
          <div className="circleContainer">
            <span onClick={this.reset} className="circle">
              <p className="counter">{this.state.seconds}</p>
            </span>
          </div>
          <div className="iconDiv">
            <i onClick={this.play} className="fas fa-play"></i>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="circleContainer">
            <span className="circle">
              <p className="counter">{this.state.seconds}</p>
            </span>
          </div>
          <div className="iconDiv">
            <i onClick={this.pause} className="fas fa-pause"></i>
          </div>
        </div>
      );
    }
  }
}

export default Stopwatch;
