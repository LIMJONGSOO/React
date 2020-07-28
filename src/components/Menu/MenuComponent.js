import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">classComponent</Link>
        </li>
        <li>
          <Link to="/functionComponent">functionComponent</Link>
        </li>
        <li>
          <Link to="/error">error lifecycle</Link>
        </li>
        <li>
          <Link to="/functionComponentLifeCycle">
            functionComponentLifeCycle
          </Link>
        </li>
        <li>
          <Link to="/styledComponent">styledComponent</Link>
        </li>
        <li>
          <Link to="/todoList">todoList</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Menu;
