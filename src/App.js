import './App.css';
import Routers from './components/Routers';
import { RickAndMortyProvider } from './context/RickAndMortyContext';

function App() {
  return (
    <RickAndMortyProvider>
      <Routers />
    </RickAndMortyProvider>

  );
}



export default App;
