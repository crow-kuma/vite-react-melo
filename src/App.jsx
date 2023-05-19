// import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import Title from "./components/Title";
import ModeSwitch from "./components/ModeSwitch";
import Form from "./components/Form";
import Standard from "./components/Standard";
import Various from "./components/Various";
import Author from "./components/Author";
import 'sanitize.css';
import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <Title />
        <ModeSwitch />
        <Form />
          <Routes>
            <Route path="/" element={<Standard />} />
            <Route path="/various" element={<Various />} />
          </Routes>
        <Author />
      </div>
    </Router>
  )
}

export default App;
