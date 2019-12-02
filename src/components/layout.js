import React from 'react';

import Header from './header';
import Footer from './footer';
import FAQ from "./faq";

const Layout = props => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <FAQ/>
      <Footer />
    </>
  );
};

export default Layout;
