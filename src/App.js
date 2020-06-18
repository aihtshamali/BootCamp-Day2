import React from 'react';
import './css/index.css';
// import Skill from './Skill'
import MediaCard from './Components/MediaCard/MediaCard';
import Gate from './Components/Gate/Gate';

function App({name}) {
  return (
    <div className="App">
      <header className="App-header">
         <p class="tp-">
           Hello My name is <strong>{name}</strong>
         </p>
        <MediaCard title="Title of MediaCard" body={<span>Here is the simple body with<br/><strong>Bolder Content</strong></span>} imageUrl="https://media-exp1.licdn.com/dms/image/C5603AQHUro7XOJrLCw/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=qk7hG-xoL03XE7qxXiAkSWMJBRsOWhhoIQ3yiuHhdz4" />         
        <Gate isOpen={false}/>
        <Gate isOpen={true}/>
       </header>
    </div>
  );
}

export default App;
