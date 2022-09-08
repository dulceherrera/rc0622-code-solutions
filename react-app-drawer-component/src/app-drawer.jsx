import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });
    }
  }

  render() {
    let icon;
    let bgcolor;
    let status;
    if (this.state.isClicked === true) {
      status = 'modal disappear';
      bgcolor = 'grey';
      icon = 'hidden';
    } else {
      status = 'modal';
      icon = 'fa-solid fa-bars';
    }
    return (
      <React.Fragment>
        <div className={status}>
          <h1 onClick={this.handleClick}>Menu</h1>
          <p onClick={this.handleClick}>About</p>
          <p onClick={this.handleClick}>Get Started</p>
          <p onClick={this.handleClick}>Sign In</p>
        </div>
        <div className={bgcolor} onClick={this.handleClick}>
          <i className={icon} onClick={this.handleClick}></i>
        </div>
      </React.Fragment>
    );
  }
}
