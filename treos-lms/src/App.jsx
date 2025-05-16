import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Login from './Login';
import Dashboard from './Dashboard'
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './style.css';


function App() {
  return (
    <>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
         <Route path="/About" element={<About />} />
         <Route path="/Services" element={<Services />} />
         <Route path="/Blog" element={<Blog />} />
         <Route path="/Contact" element={<Contact />} />
         <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
   

        </Routes>
       
        <Footer />
      </div>
    </>
  );
}

export default App;
