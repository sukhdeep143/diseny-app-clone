import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Detail from './components/Detail';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path='/detail' element={<Detail />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;
