import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <button onClick={this.increment} className={`button buttonShadow
      ${this.state.count >= 1 && this.state.count < 4 ? 'darkPurple' : null}
      ${this.state.count >= 4 && this.state.count < 7 ? 'lightPurple' : null}
      ${this.state.count >= 7 && this.state.count < 10 ? 'coral' : null}
      ${this.state.count >= 10 && this.state.count < 13 ? 'orange' : null}
      ${this.state.count >= 13 && this.state.count < 16 ? 'yellow' : null}
      ${this.state.count >= 16 && this.state.count < 19 ? 'white' : null}
      `}>
        <span>Hot Button {this.state.count}</span>
      </button>
    );
  }
}

export default HotButton;
