import './App.css';
import React from 'react';
import { Header } from './components/Header/Header';
import { HomePage } from './components/Home Page/HomePage';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import CatalogContainer from './components/Catalog/CatalogContainer';
import Motoboxs from './components/Motoboxs/Motoboxs';
import Guarantee from './components/Guarantee/Guarantee';
import Delivery from './components/Delivery/Delivery';
import ExamplesContainer from './components/Examples/ExamplesContainer';
import Contacts from './components/Contacts/Contacts';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='app-header'>
          <Header />
        </div>
        <div className='App-content'>
          <Route exact path="/"><Redirect to="/home" /></Route>
          <Route path='/home'
            render={() => <HomePage />} />
          <Route path='/catalog'
            render={() => <CatalogContainer />} />
          <Route path='/motoboxs'
            render={() => <Motoboxs />} />
          <Route path='/guarantee'
            render={() => <Guarantee />} />
          <Route path='/delivery'
            render={() => <Delivery />} />
          <Route path='/examples'
            render={() => <ExamplesContainer />} />
          <Route path='/contacts'
            render={() => <Contacts />} />
        </div>
        <div className='app-footer'>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
