import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Conjunto from './components/Conjunto/Conjunto';


function App() {
  return (
    
    <div className="App">
    <Router>  
     <Header/> 
     <div className="container">
     
     <Routes>
        <Route path="/" element={<Conjunto />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   
     </div>
     <Footer/>
     </Router>
    </div>

  );
}

export default App;
