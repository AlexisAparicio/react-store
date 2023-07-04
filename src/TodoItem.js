import React from 'react';
import './TodoCounter.css';

function TodoItem(props){
    return(
        <li>
            <span>C</span>
                <p>{props.text}</p>
                <span>X</span>
        </li>
    );
}

export  {TodoItem};