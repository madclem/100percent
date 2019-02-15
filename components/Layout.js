import React from 'react';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';

export default ({ children }) => (
  <React.Fragment>
    <NavBar />
    { children }
    <Footer />
  </React.Fragment>
)