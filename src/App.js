import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div id="hero">
        <Hero />
      </div>
      <div id="meals">
        <Products heading='وجبات ايطاليانو' data={productData} />
      </div>
      <Feature />
      <div id="pizza">
        <Products heading='بيتزا ايطاليانو' data={productDataTwo} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
