import './App.css';
import React from 'react';
import { Header } from './components/Header/Header';
import { HomePage } from './components/Home Page/HomePage';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <HomePage/>
      <Footer/>
      <div className='App-content'>

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
