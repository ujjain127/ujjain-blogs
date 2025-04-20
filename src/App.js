import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BlogList from './components/BlogList';
import Projects from './components/Projects';
import About from './components/About';
import Newsletter from './components/Newsletter';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
