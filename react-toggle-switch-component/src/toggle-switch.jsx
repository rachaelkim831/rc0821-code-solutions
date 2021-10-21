import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      text: 'OFF'
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    return (
      <div className="container">
        <label className="toggle">
          <input className="toggleCheck" type="checkbox"></input>
          <span onClick={this.clickHandler} className=
          {`slider circle ${this.state.isClicked === true ? 'on' : 'off'}`}></span>
        </label>
        <p className="text">{this.state.isClicked === true ? 'ON' : 'OFF'}</p>
    </div>
    );
  }
}

export default ToggleSwitch;
