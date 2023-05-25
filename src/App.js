import React from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navbar';
import Rotas from './routes';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Rotas/>
      <Footer/>
    </div>
  );
}

export default App;
