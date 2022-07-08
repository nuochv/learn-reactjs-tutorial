import './App.css';
import ColorPicker from './components/ColorPicker';
import { useState } from 'react';
import Result from './components/Result';
import SettingSize from './components/SettingSize';
import Reset from './components/Reset';

function App() {
  const [color, setColor] = useState('red');
  const [fontSize, setFontSize] = useState(12);

  const handleSetFont = (value) => {
    const newValue = fontSize + value;
    if (newValue >= 8 && newValue <= 36) setFontSize(newValue);
  };

  const handleReset = (value) => {
    if (value) {
      setColor('red');
      setFontSize(12);
    }
  };

  return (
    <div className="container mt-50">
      <div className="row">
        <ColorPicker color={color} receiveColor={setColor} />

        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <SettingSize fontSize={fontSize} onSetFontSize={handleSetFont} />
          <Reset handleReset={handleReset} />
        </div>
        <Result fontSize={fontSize} color={color} />
      </div>
    </div>
  );
}

export default App;
