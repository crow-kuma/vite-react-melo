// import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import Title from "./components/Title";
import ModeSwitch from "./components/ModeSwitch";
import Standard from "./components/Standard";
import Various from "./components/Various";
import Author from "./components/Author";
import './App.css'

function App() {

  return (
    <>
      <Title />
      <ModeSwitch />
        <Router>
          <Routes> 
            <Route path="/standard" element={<Standard />} />
            <Route path="/various" element={<Various />} />
          </Routes>
        </Router>
      <Author />
    </>
  )
}

export default App
