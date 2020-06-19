import React from 'react';
import './css/index.css';
import Room from './Components/Room/Room';



function App({name}) {
  return (
    <div className="App">
      <header className="App-header">
         <p >
           Hello My name is <strong>{name}</strong>
         </p>
        <Room/>
       </header>
    </div>
  );
}

export default App;
