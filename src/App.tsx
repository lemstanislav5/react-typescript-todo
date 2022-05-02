import React from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {AboutPage} from './pages/AboutPage'
import {TodoPage} from './pages/TodoPage'


const App: React.FunctionComponent = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<TodoPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
    </Routes>
   </Router>
  );
}

export default App;
