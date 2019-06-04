import React from 'react';
import './App.css';
import Calculator from './components/DisplayComponents/CalculatorDisplay';
import FunctionalCalculator from './components/DisplayComponents/CalculatorDisplayFunctional'

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <Calculator />
      <FunctionalCalculator />
    </div>
  );
};

export default App;
