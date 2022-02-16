import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// page & layout imports
import Homepage from './pages/Homepage';
import ReviewDetails from './pages/ReviewDetails';
import Category from './pages/Category';
import SiteHeader from './components/SiteHeader';


const App = () => {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/details/:id" element={<ReviewDetails />}></Route>
          <Route path="/category/:id" element={<Category />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
