import React from 'react';
import './Display.css';
import NumberButtons from '../ButtonComponents/NumberButton';
import ActionButtons from '../ButtonComponents/ActionButton';

const calculatorObj = {
        display: 0,
        selectedNumber: 0,
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
            <div id="btn_clear" class="btn lgbtn">clear</div>
            <NumberButtons number="7" />
            <NumberButtons number="8" />
            <NumberButtons number="9" />
            <div id="btn_0" class="btn lgbtn">0</div>
          </div>
          <div class="actionButtons">
            <ActionButtons />
          </div>
      </div>
    );
}
export default Calculator;