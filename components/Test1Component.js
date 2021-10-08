import React from 'react';
import { useTestSWR } from '../helper/useTestSWR';

function Test1Component() {
    const { data, mutate } = useTestSWR();
    const clickHandler = () => {
        mutate(data);
    };
    return (
        <div>
            <h1>Test 1</h1>
            <h5>data:{data}</h5>
            <button onClick={clickHandler}>값 변경</button>
        </div>
    );
}

export default Test1Component;
