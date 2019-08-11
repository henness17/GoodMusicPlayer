import React from 'react';
import Player from './Player.js'

class App extends React.Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div className="App">
        <Player />
      </div>
    );
  }  
} 

export default App;
