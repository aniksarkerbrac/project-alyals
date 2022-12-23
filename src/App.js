import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import TopNavbar from './components/TopNavbar/TopNavbar'

function App() {
  return (
    <Router>
      
        
        <Routes>
          <Route path="/home" element={<><Header /><TopNavbar /><Home /></>} />
          <Route exact path="/" element={<><Header /><TopNavbar /><Home /></>} />
          
        </Routes>
      
    </Router>
  );
}

export default App;
