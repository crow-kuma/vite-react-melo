// import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import Title from "./components/Title";
import ModeSwitch from "./components/ModeSwitch";
import NoResult from "./components/NoResult";
import Standard from "./components/Standard";
import Various from "./components/Various";
import Author from "./components/Author";
import './App.scss'

function App() {
  return (
    <div>
      <Title />
      <ModeSwitch />
      <Router>
        <Routes>
          <Route exact path="/" element={<NoResult />} />
          <Route path="/standard" element={<Standard />} />
          <Route path="/various" element={<Various />} />
        </Routes>
      </Router>
      <Author />
    </div>
  )
}

export default App;
