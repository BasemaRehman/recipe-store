import React from 'react';
import './App.css';
import ListRecipePagesComponent from './components/ListRecipePagesComponent';
import CreateRecipeComponent from './components/CreateRecipeComponent';

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";



function App() {
  return (
    <Router>
      <nav>
        <Link to='/'> Home </Link>
        <Link to='/add-recipe'> Add Recipe </Link>
      </nav>
        <Routes>
          <Route path="/" element = {<ListRecipePagesComponent />}></Route>
          <Route path="/add-recipe" element = {<CreateRecipeComponent />}></Route>
        </Routes>
    </Router>
    
  );
}

export default App;
