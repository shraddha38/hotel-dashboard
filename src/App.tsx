import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Details from './components/Details';
import NotFound from './components/NotFound';
import Card from './components/Card';
import Header from './components/Header';
import { PracticeQuery } from './components/PracticeQuery';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <QueryClientProvider client={new QueryClient}>
          <Routes >
            <Route path="/create" element={<Create />} />
            <Route path="/hotels/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/practice" element={<PracticeQuery />} />
            <Route path="/" element={<Card />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div >
  );
}

export default App;


