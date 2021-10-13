import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <div>
        <li>{this.props.label + ' - ' + this.props.value}</li>
      </div>
    );
  }
}

export default Child;
