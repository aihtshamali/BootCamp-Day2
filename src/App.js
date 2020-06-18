import React from 'react';
import './css/index.css';
import Skill from './Skill'

function App({name}) {
  return (
    <div className="App">
      <header className="App-header">
         <img src={"https://media-exp1.licdn.com/dms/image/C5603AQHUro7XOJrLCw/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=qk7hG-xoL03XE7qxXiAkSWMJBRsOWhhoIQ3yiuHhdz4"} className="App-logo" alt="logo" />
         <p class="tp-">
           Hello My name is <strong>{name}</strong>
         </p>
         
        <Skill/>
        <span>from here you can 
        <a
           className="App-link"
           href="mailto:aihtshamali@gmail.com"
           target="_blank"
           rel="noopener noreferrer"
         >
           -Contact me
         </a>
         </span>
       </header>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
