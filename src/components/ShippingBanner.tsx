'use client';

import { Nav, Navbar } from 'react-bootstrap';

const ShippingBanner = () => (
  <Navbar className="banner" id="shippingBanner">
    <Nav className="col justify-content-center">
      <i id="shippingMessage">Free shipping on orders of $120 or more</i>
    </Nav>
  </Navbar>
);

export default ShippingBanner;
