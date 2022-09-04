import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let symbol;
    let text;
    let view;

    if (this.state.password.length === 0) {
      symbol = 'fa-sharp fa-solid fa-xmark red';
      view = 'visible';
      text = 'A password is required.';
    } else if (this.state.password.lenght !== 0 && this.state.password.length < 8) {
      symbol = 'fa-sharp fa-solid fa-xmark red';
      view = 'visible';
      text = 'Your password is too short.';
    } else if (this.state.password.length >= 8) {
      view = 'hidden';
      symbol = 'fa-sharp fa-solid fa-check green';
    }

    return (
      <form>
        <p className='font-size'>Password</p>
        <label>
          <input type="password" value={this.state.password} onChange={this.handlePassword}></input>
          <i className={symbol}></i>
        </label>
        <p className={view}>{text}</p>
      </form>
    );
  }
}
