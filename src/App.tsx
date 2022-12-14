import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Details from './components/Details';
import NotFound from './components/NotFound';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes >
          <Route path="/create" element={<Create />} />
          <Route path="/hotels/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
