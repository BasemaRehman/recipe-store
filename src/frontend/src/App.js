import logo from './logo.svg';
import React from 'react';
import './App.css';
import axios from 'axios';
import ListRecipePagesComponent from './components/ListRecipePagesComponent';



function App() {
  return (
    <div className="container">
      <ListRecipePagesComponent />
    </div>
    
  );
}

export default App;
