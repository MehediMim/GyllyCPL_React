import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Team from './Team';
import MainHome from './MainHome';
import Season from './Seasons/Season4';
import Photos from './Photos';
import Players from './players';
import News from './news';
import Season4Matches from './Seasons/Season4Matches';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/team' element={<Team/>}/>
        <Route path='/season4' element={<Season/>}/>
        <Route path='/photos' element={<Photos/>}/>
        <Route path='/players' element={<Players/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/season4Allmatches' element={<Season4Matches/>}/>
        <Route path='/' element={<MainHome/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
