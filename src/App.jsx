import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Header/> 
     <Profile />
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
