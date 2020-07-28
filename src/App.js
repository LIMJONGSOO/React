import React, { useState, useRef, useCallback } from 'react';
import './App.css';
import Menu from './components/Menu/MenuComponent';
import FunctionComponent from './components/FunctionComponent/FunctionComponent';
import ClassComponent from './components/ClassComponent/ClassComponent';
import LifeCycle from './components/LifeCycle/LifeCycle';
import ErrorCatch from './components/ErrorCatch/ErrorCatch';
import FunctionComponentLifeCycle from './components/LifeCycle/FunctionComponentLifeCycle';
import StyledComponent from './components/StyledComponent/StyledComponent';
import TodoTemplate from './components/Todo/TodoTemplate/TodoTemplate';
import TodoInsert from './components/Todo/TodoInsert/TodoInsert';
import TodoList from './components/Todo/TodoList/TodoList';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리엑트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      console.log(todos);
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
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
          path="/todoList"
          render={() => (
            <>
              <Menu />
              <TodoTemplate>
                <TodoInsert onInsert={onInsert} />
                <TodoList
                  todos={todos}
                  onRemove={onRemove}
                  onToggle={onToggle}
                />
              </TodoTemplate>
            </>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
