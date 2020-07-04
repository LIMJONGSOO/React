import React, { useState, useEffect, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value + 1 };
    default:
      return state;
  }
}

const FunctionComponentLifeCycle = ({ name, number, children }) => {
  const [stateNumber, setStateNumber] = useState(0);
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  // mount, update 되면 실행
  // 두번째 인자 배열에 있는 값이 업데이트 되면 실행, 빈 배열이면 마운트 일 때만 실행
  useEffect(() => {
    console.log('렌더링 완료');
    console.log({ stateNumber });

    //클린함수 반환하면 unmount 될 때 클린 함수 실행
    return () => {
      console.log('unmount');
    };
  }, []);

  const onClickStateNumber = (e) => {
    setStateNumber(stateNumber + 1);
  };

  return (
    <div>
      <p>현재 State value {{ stateNumber }}</p>
      <button onClick={onClickStateNumber}>+1</button>
      <p>현재 Reducer value {{ state }}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        reducer dispatch +1
      </button>
    </div>
  );
};

export default FunctionComponentLifeCycle;
