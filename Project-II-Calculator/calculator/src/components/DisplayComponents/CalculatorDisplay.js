import React from 'react';
import './Display.css';
import NumberButtons from '../ButtonComponents/NumberButton';
import ActionButtons from '../ButtonComponents/ActionButton';

const calculatorObj = {
        display: 0,
        clear: 'function placeholder',
        equals: 'function placeholder',
        actionBar: [
            {
                action: 'add',
                display: '+',
                function: 'function placeholder'
            },
            {
                action: 'subtract',
                display: '-',
                function: 'function placeholder'
            },
            {
                action: 'multiply',
                display: '&times;',
                function: 'function placeholder'
            },
            {
                action: 'divide',
                display: '&divide;',
                function: 'function placeholder'
            },
            {
                action: 'equals',
                display: '=',
                function: 'function placeholder'
            }
        ]
    };
    

const Calculator = () => {
    return (
      <div class="calculator">
          <div class="displayValue">{calculatorObj.display}</div>
          <div class="numberButtons">
            <div class="clearbutton">clear</div>
          </div>
      </div>
    );
}
export default Calculator;