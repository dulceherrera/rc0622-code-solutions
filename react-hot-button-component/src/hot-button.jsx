import React from 'react';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: this.state.isClicked + 1 });
  }

  render() {
    let button;
    if (this.state.isClicked < 3) {
      button = 'purple';
    } else if (this.state.isClicked < 6) {
      button = 'lavender';
    } else if (this.state.isClicked < 9) {
      button = 'light-coral';
    } else if (this.state.isClicked < 12) {
      button = 'orange';
    } else if (this.state.isClicked < 15) {
      button = 'yellow';
    } else if (this.state.isClicked < 18) {
      button = 'white';
    } else {
      button = 'white';
    }
    return (
      <button className={button} onClick={this.handleClick}>Hot Button</button>
    );
  }
}
