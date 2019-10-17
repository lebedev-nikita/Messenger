import React from 'react';
import Clock from './clock.js'
import InputField from './InputField'
import './css/App.css';




function App() {
  return (
    <h1> Hello,World!!! </h1>///
  );
}




function AppRender() {
    return(    
        <div className="App">
          <App />
          <Clock/>
          <InputField/>
        </div>///      
    );
}

export default AppRender;
