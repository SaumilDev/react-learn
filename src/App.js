import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// import { useState } from 'react';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light') //DarkMode is enable or not
 const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "#212529";
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
    <Navbar title="Testing" abouttxt= "About us" filter="Filter" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Enter the text Analyze below" mode={mode}  />
    </div>
    
    
    </>
  );
}

export default App;
