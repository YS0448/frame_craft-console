import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import CustHome from './pages/customer/custHome';


function App() {
  return (
    <Router>
      <Header />

        <Routes>
          <Route path="/" element={<CustHome/>}/>
          <Route path="/test" element={<h1>Test Route Works!</h1>} />
        </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
