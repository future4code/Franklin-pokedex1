
import { Routers } from './routes/Routers';
import { ContextPokedex } from "./context/ContextPokedex";
import { useState} from 'react';
function App() {
  const [pokedex, setPokedex] = useState([])
  
  const globalPokedex= {
    state: pokedex,
    setter: setPokedex
  }

  return (
    <div>
      <ContextPokedex.Provider value={globalPokedex}>
        <Routers />
      </ContextPokedex.Provider>
    </div>
  );
}

export default App;
