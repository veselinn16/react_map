import React, { Component } from 'react';

class Map extends Component {
  componentDidMount() {
    this.props.loadMap()
  }

  render() {
    return(
      <div id={this.props.id} role="application"/>
    )
  }
};

export default Map;