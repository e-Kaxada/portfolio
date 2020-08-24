import React from 'react';
import Home from './components/Home/Home'
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Projects from './components/Projects/Projects'
import NavBar from './components/NavBar/NavBar'
import './App.css'


function App() {
  return (
    <div className="App">
      <Home/>
      <NavBar/>
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
