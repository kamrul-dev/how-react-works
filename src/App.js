import logo from './logo.svg';
import './App.css';
import Device from './Components/Device/Device';
import Watch from './Components/Watch/Watch';
import Tablet from './Tablet/Tablet';

function App() {
  return (
    <div className="App">
      <Device name="iPhone" price="75000"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
