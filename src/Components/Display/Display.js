import React from 'react';
import Dial from './Dial';

// stateless component or presentational component
const Display = (props) => {
    return (
        <div style={{border: "2px solid green"}}>
            <h2>Name: {props.name}</h2>
            <p>So far Steps today: {props.steps}</p>
            <Dial steps = {props.steps}></Dial>
        </div>
    );
};

export default Display;

