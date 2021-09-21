import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductDetail from './containers/ProductDetail';
import { CssBaseline } from '@material-ui/core';

/**
 * Main app function
 * @returns 
 */
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ProductDetail />
    </React.Fragment>
  );
}

export default App;
