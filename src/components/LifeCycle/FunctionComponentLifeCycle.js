import React, {
  useState,
  useEffect,
  useReducer,
  useMemo,
  useCallback,
  useRef,
} from 'react';

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
  const inputEl = useRef(null);

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

  const sum = useMemo(() => {
    return stateNumber + state.value;
  }, [stateNumber]);

  //컴포넌트가 처음 렌더링 될 때만 생성
  const onClickStateNumber = useCallback((e) => {
    inputEl.current.focus();
    setStateNumber(stateNumber + 1);
  }, []);

  const onChange = useCallback((e) => {
    setStateNumber(e.target.value);
  }, []);

  return (
    <div>
      <input value={stateNumber} onChange={onChange} ref={inputEl} />
      <p>현재 State value {stateNumber}</p>
      <button onClick={onClickStateNumber}>+1</button>
      <p>현재 Reducer value {state.value}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        reducer dispatch +1
      </button>
      <p>Reducer value + State valeu {sum}</p>
    </div>
  );
};

export default FunctionComponentLifeCycle;
