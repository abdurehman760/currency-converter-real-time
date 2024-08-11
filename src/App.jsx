// App.jsx
import React from 'react';
import ConverterForm from './components/ConverterForm';
import Tooltip from './components/Tooltip'; // Import Tooltip component

const App = () => {
  return (
    <div className="currency-converter">
      <Tooltip /> {/* Add Tooltip component */}
      <h2 className="converter-title">Currency Converter</h2>
      <ConverterForm />
    </div>
  );
};

export default App;
