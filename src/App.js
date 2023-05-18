
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key='general' pageSize={12} country='us' category='general' headline="General News" />}></Route>
            <Route exact path="/business" element={<News key= "business" pageSize={6} country="in" category="business" headline="Business News" />}> </Route>
            <Route exact path="/entertainment" element={<News key= "entertainment"  pageSize={6} country="in" category="entertainment"headline="Entertainment News" />}> </Route>
            <Route exact path="/general" element={<News key= "general" pageSize={6} country="in" category="general" headline="General News" />} ></Route>
            <Route exact path="/health" element={<News key= "health" pageSize={6} country="in" category="health" headline="Health News" /> }></Route>
            <Route exact path="/science" element={<News key= "science" pageSize={6} country="in" category="science" headline="Science News" /> }></Route>
            <Route exact path="/sports" element={<News key= "sports" pageSize={6} country="in" category="sports" headline="Sports News" /> }></Route>
            <Route exact path="/technology" element={<News  key= "technology" pageSize={6} country="in" category="technology"headline="Technology News" /> }></Route>

          </Routes>
        </Router>

      </div>
    )
  }
}

