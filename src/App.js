import React from 'react';
import './App.css';
import FunctionComponent from './components/FunctionComponent/FunctionComponent';
import ClassComponent from './components/ClassComponent/ClassComponent';
import LifeCycle from './components/LifeCycle/LifeCycle';
import ErrorCatch from './components/ErrorCatch/ErrorCatch';
import FunctionComponentLifeCycle from './components/LifeCycle/FunctionComponentLifeCycle';
import StyledComponent from './components/StyledComponent/StyledComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent name="classComponent" number={1} />
      <FunctionComponent name="functionComponent" number={2} />
      <ErrorCatch>
        <LifeCycle />
      </ErrorCatch>
      <FunctionComponentLifeCycle />
      <StyledComponent />
    </div>
  );
}

export default App;
