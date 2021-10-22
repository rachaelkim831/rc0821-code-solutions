import React from 'react';

class ValidateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <form>
        <label>
          <p className="pwText">Password</p>
          <input onChange={this.handleChange} value={this.state.value} className="pwInput" type="password" name="password" />
          <i className={`fas fa-${this.state.password.length === '' || this.state.password.length < 8 ? 'times' : 'check'}`}></i>
        </label>
        <p className="error">
          {this.state.password.length === 0
            ? 'A password is required.'
            : this.state.password.length < 8
              ? 'Password is too short.'
              : ''}</p>
      </form>
    );
  }
}

export default ValidateForm;
