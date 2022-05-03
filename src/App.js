import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NameForm } from './components/Form';
import { StarWars } from './components/StarWars'

function App() {
  return (
    <div className="App">
      <StarWars />
      <header className="App-header">
      <NameForm />
      </header>

    </div>
  );
}

export default App;
