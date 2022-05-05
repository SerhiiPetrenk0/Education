import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NameForm } from './components/Form';
import { StarWars } from './components/StarWars'
import { CustomRouter } from './components/Router';
function App() {
  return (
    <div className="App">
    <CustomRouter />
      <StarWars />
      <header className="App-header">
      <NameForm />
      </header>

    </div>
  );
}

export default App;
