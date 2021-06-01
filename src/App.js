import './App.css';
import Addtask from './components/AddTask';
import { Filtre } from './components/Filtre';
import Tasklist from './components/TaskList';

function App() {
  return (
    <div className="App">
    <div className="App_container">
      <Addtask/>
      <Tasklist/>
      <Filtre /> 
      </div>
    </div>
  );
}

export default App;