import React, { useEffect, useState } from 'react';
import Tablet from '../../Tablet/Tablet';
import Display from '../Display/Display';

// stateful component
const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }
    useEffect(() => {
        console.log(steps);
    }, [steps]);
    return (
        <div style={{border: "2px solid purple", margin: "20px"}}>
            <h2>This is my smart watch</h2>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={increaseSteps}>Start Walk</button>
            <Display name="Apple" steps={steps}></Display>
            <Tablet></Tablet>
        </div>
    );
};

export default Watch;

/* 
props vs state
==========================
 props:
    -- Props are read-only, it can not be changed
    -- Props can not be modified
 state:
    -- State changes can be asynchronous
    -- State can be modified using this.setState





*/