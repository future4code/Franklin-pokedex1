
import { Routers } from './routes/Routers';
import { ContextPokedex } from "./context/ContextPokedex";
import { useState} from 'react';
function App() {
  const [pokedex, setPokedex] = useState([])
 
  return (
    <div>
      <ContextPokedex.Provider value={[pokedex, setPokedex]}>
        <Routers />
      </ContextPokedex.Provider>
    </div>
  );
}

export default App;
