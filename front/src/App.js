import React from 'react';

import { Header, Footer } from './components';
import { Home, Cart, AcceptedOrder } from './pages';
import { Route } from 'react-router-dom';

export default function App() { 
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/accepted" component={AcceptedOrder} exact />
      </div>
      <Footer />
    </div>
  );
}