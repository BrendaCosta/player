import Player from './components/Player'
import musics from './musics'

import './App.css';



function App() {


  
  return (
    <div className="App">
      <Player musics={musics}/>
    </div>
  );
}

export default App;
