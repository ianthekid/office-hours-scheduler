import './App.css';
import Scheduler from './Scheduler'

function App() {
  return (
    <div className="App">
      <div style={{
        width: "80vw",
        height: "1020px",
        margin: "5vh auto 0",
        "--cell-height": "20px",
        "--cell-width": "50px"
      }}>
        <Scheduler />
      </div>
    </div>
  );
}

export default App;
