import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FunctionComponent = ({ name, number, children }) => {
  const [stateNumber, setStateNumber] = useState(0);
  // const [message, setMessage] = useState('');
  // const [message2, setMessage2] = useState('');
  // const onChangeMessage = (e) => setMessage(e.target.value);
  // const onChangeMessage2 = (e) => setMessage2(e.target.value);
  const [form, setForm] = useState({
    message: '',
    message2: '',
  });
  const { message, message2 } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  return (
    <div>
      {name}
      <br />
      {children}
      <br />
      {number}
      <h1>stateNumber : {stateNumber}</h1>
      <button
        onClick={() => {
          setStateNumber(stateNumber + 1);
        }}
      >
        +1
      </button>
      <br />
      <input type="text" name="message" value={message} onChange={onChange} />
      <br />
      <input type="text" name="message2" value={message2} onChange={onChange} />
    </div>
  );
};

FunctionComponent.defaultProps = {
  name: 'default name',
};

FunctionComponent.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number.isRequired,
};

export default FunctionComponent;
