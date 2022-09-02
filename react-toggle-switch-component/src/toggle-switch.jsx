import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { switchOn: false };
  }

  handleClick() {
    if (this.state.switchOn === false) {
      this.setState({
        switchOn: true
      });
    } else {
      this.setState({
        switchOn: false
      });
    }
  }

  render() {
    const switchOn = this.state.switchOn;
    let text = '';
    if (switchOn === true) {
      text = 'ON';
      return (
        <div className='flex'>
        <div className="container bcgreen">
        <button className="on" onClick={this.handleClick}></button>
          </div>
        <span>{text}</span>
        </div>
      );
    } else {
      text = 'OFF';
      return (
        <div className='flex'>
        <div className="container">
          <button className="off" onClick={this.handleClick}></button>
          </div>
          <span>{text}</span>
        </div>
      );
    }
  }
}
