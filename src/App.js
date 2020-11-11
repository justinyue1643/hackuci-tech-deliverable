import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import HackApp from './components/HackApp';
import PetrAnimation from './components/PetrAnimation';

function App() {
  return (
    <div className="App">
      <div className="hackapp-container">
        <HackApp className = "hackapp"/>
      </div>
      <PetrAnimation />
    </div>
  );
}

export default App;
