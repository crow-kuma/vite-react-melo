import { createContext, useState } from 'react'
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

export const ResultContext = createContext();

function App() {
  const [weight, setWeight] = useState(0);
	const [weightName, setWeightName] = useState('');
  const melo = 338;
  const meloBB = 20;
  const standardResult = Math.round(weight / melo * 100) / 100;
  const variousResult = Math.floor(weight / melo);
  const variousResultBB = Math.floor(weight % melo / meloBB);
  const variousResultCarrot = Math.round(((weight % melo) % meloBB) / 0.2);


  return (
    <ResultContext.Provider value={{standardResult, variousResult, variousResultBB, variousResultCarrot}}>
      <Router>
        <div>
          <Title />
          <ModeSwitch />
          <Form weight={weight} setWeight={setWeight} weightName={weightName} setWeightName={setWeightName}/>
            <Routes>
              <Route path="/" element={<Standard />} />
              <Route path="/various" element={<Various />} />
            </Routes>
          <Author />
        </div>
      </Router>
    </ResultContext.Provider>
  )
}

export default App;
