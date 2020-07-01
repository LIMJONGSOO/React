import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {
  static defaultProps = {
    name: 'default name',
  };

  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.number.isRequired,
  };

  state = {
    stateNumber: 0,
    message: '',
    message2: '',
  };

  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { name, number, children } = this.props; //비구조화 할당
    const { stateNumber } = this.state;
    return (
      <div className="react">
        {name}
        <br />
        {children}
        <br />
        {number}
        <h1>stateNumber : {stateNumber}</h1>
        <button
          onClick={() => {
            this.setState(
              (prevState) => ({
                stateNumber: prevState.stateNumber + 1,
              }),
              () => {
                console.log('setState가 실행됨');
              }
            );
          }}
        >
          +1
        </button>

        <br />
        <input
          type="text"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
          ref={(ref) => (this.messageInput = ref)}
        />
        <br />
        <input
          type="text"
          name="message2"
          value={this.state.message2}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={() => this.messageInput.focus()}>
          첫번째 인풋 포커스
        </button>
      </div>
    );
  }
}

// ClassComponent.defaultProps = {
//   name: 'default name',
// };

// ClassComponent.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.number.isRequired,
// };

export default ClassComponent;
