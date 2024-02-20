import logo from './logo.svg';
import './App.css';
import Clock from './functionalClock';
import ClassClock from './classClock';

function App() {
  return (
    <div className="App">
      <Clock />
      <ClassClock />
    </div>
  );
}

export default App;
