import React, { Component, Fragment } from 'react';

class LifeCycle extends Component {
  state = {
    message: '',
  };

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps');
    return null;
  }

  render() {
    console.log('render');
    return (
      <Fragment>
        <button onClick={() => this.forceUpdate()}>update</button>
      </Fragment>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    return '';
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidCatch() {
    console.log('componentDidCatch');
  }
}

export default LifeCycle;
