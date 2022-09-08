import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibleIndex: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    if (this.state.visibleIndex === index) {
      this.setState({ visibleIndex: null });
    } else {
      this.setState({ visibleIndex: index });
    }
  }

  render() {
    const listItems = this.props.topics.map((topic, index) => (
  <div key={topic.name}>
    <div className={this.state.visibleIndex === index ? 'open' : 'closed'} onClick={() => this.handleClick(index)}>{topic.name}</div>
    <div className={this.state.visibleIndex === index ? 'visible' : 'hidden'}>{topic.description}</div>
  </div>
    ));
    return (
<ul>
  {listItems}
</ul>
    );
  }
}
