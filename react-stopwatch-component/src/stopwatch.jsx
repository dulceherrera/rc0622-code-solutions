import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { start: false, ticks: 0 };
    this.playPause = this.playPause.bind(this);
    this.reset = this.reset.bind(this);
  }

  tick() {
    this.setState({
      ticks: this.state.ticks + 1
    });
  }

  playPause() {
    const play = this.state.start;
    if (play === false) {
      this.intervalId = setInterval(() => this.tick(), 1000);
      this.setState({
        start: true
      });
    } else {
      clearInterval(this.intervalId);
      this.setState({
        start: false
      });
    }
  }

  reset() {
    const play = this.state.start;
    if (play === false) {
      this.setState({
        ticks: 0
      });
    }
    clearInterval(this.intervalId);
  }

  render() {
    const play = this.state.start;
    const seconds = this.state.ticks;
    let button = '';

    if (play === false) {
      button = 'fa fa-play fa-5x';
    } else {
      button = 'fa fa-pause fa-5x';
    }
    return (
      <div className='height'>
        <div className='container' onClick={this.reset}>
          <p>{seconds}</p>
        </div>
        <button className={button} onClick={this.playPause}></button>
      </div>
    );
  }
}
