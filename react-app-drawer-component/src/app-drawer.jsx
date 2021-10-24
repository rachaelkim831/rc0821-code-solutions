import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div id="nav-container">
        <div onClick={this.toggle} className={`bg ${this.state.isOpen === true ? 'visible' : ''}`} ></div>
        <button onClick={this.toggle} className="button" tabIndex="0">
          <i className="fas fa-bars"></i>
        </button>
        <div id="nav-content" className={this.state.isOpen === true ? 'visible' : ''} tabIndex="0">
          <h2>Menu</h2>
          <ul>
            <li onClick={this.toggle}><a href="#">About</a></li>
            <li onClick={this.toggle}><a href="#">Get Started</a></li>
            <li onClick={this.toggle}><a href="#">Sign In</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
