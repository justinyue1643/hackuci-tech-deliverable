import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import HackApp from './components/HackApp';
import PetrAnimation from './components/PetrAnimation';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <div className="hackapp-container">
        <HackApp className="hackapp" />
      </div>
      <div className = "petr-container">
        <PetrAnimation className = 'petr' />
      </div>
    </div>
  );
}

export default App;
