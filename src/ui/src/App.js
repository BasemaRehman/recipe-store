import React from 'react';
import './App.css';
import ListRecipePagesComponent from './components/ListRecipePagesComponent';
import CreateRecipeComponent from './components/CreateRecipeComponent';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import DeleteModal from './components/DeleteModal';



function App() {
  return (
    <Router>
      <Navbar /><br />
        <Routes>
          <Route path="/" element = {<ListRecipePagesComponent />}></Route>
          <Route path="/add-recipe" element = {<CreateRecipeComponent />}></Route>
          <Route path="/edit-recipe/:id" element = {<CreateRecipeComponent />}></Route>
        </Routes>
        <header className='footer__page' width="150" height="40"></header>
    </Router>
    
  );
}

export default App;
