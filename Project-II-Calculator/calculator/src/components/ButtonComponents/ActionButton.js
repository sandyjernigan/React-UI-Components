import React from 'react';
import './Button.css';

function ActionButtons(props) {
    return (
      <div class="btn actionBtn">
          {props.actionBtn.display}
      </div>
    );
}
export default ActionButtons;
