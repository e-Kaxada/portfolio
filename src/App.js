import React from 'react';
import Home from './components/Home/Home'
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Projects from './components/Projects/Projects'
import './App.css'


function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
