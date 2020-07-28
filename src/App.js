import React from 'react';
import './App.css';
import Menu from './components/Menu/MenuComponent';
import FunctionComponent from './components/FunctionComponent/FunctionComponent';
import ClassComponent from './components/ClassComponent/ClassComponent';
import LifeCycle from './components/LifeCycle/LifeCycle';
import ErrorCatch from './components/ErrorCatch/ErrorCatch';
import FunctionComponentLifeCycle from './components/LifeCycle/FunctionComponentLifeCycle';
import StyledComponent from './components/StyledComponent/StyledComponent';
import TodoTemplate from './components/Todo/TodoTemplate/TodoTemplate';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Menu />
              <ClassComponent name="classComponent" number={1} />
            </>
          )}
        />
        <Route
          path="/functionComponent"
          render={() => (
            <>
              <Menu />
              <FunctionComponent name="functionComponent" number={1} />
            </>
          )}
        />
        <Route
          path="/error"
          render={() => (
            <>
              <Menu />
              <ErrorCatch>
                <LifeCycle />
              </ErrorCatch>
            </>
          )}
        />
        <Route
          exact
          path="/functionComponentLifeCycle"
          render={() => (
            <>
              <Menu />
              <FunctionComponentLifeCycle />
            </>
          )}
        />
        <Route
          exact
          path="/styledComponent"
          render={() => (
            <>
              <Menu />
              <StyledComponent />
            </>
          )}
        />
        <Route
          exact
          path="/todo"
          render={() => (
            <>
              <Menu />
              <TodoTemplate />
            </>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
