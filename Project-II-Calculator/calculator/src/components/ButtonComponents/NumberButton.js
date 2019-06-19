import React from 'react';
import './Button.css';

function NumberButtons(props) {
    return (
      <div id={props.number} class="btn numberBtn">
          {props.number}
      </div>
    );
}
export default NumberButtons;