'use client';

import { Nav, Navbar, Image } from 'react-bootstrap';

const BrandText = () => (
  <Navbar className="navbar navbar-expand-sm bg-light" id="textNavbar">
    <Nav className="row" id="brandText">
      <Image id="smallerLogo" src="/logo.webp" />
      <Nav>
        Aloha All Day Hawaii, we focus on designing and creating
        <br />
        everyday essentials to fit your lifestyle.
        <br />
      </Nav>

      <Nav>
        <br />
        We are committed to bringing the spirit of aloha to your everyday life
        <br />
        through our unique products, vibrant colors, and quality materials.
        <br />
      </Nav>

      <Nav>
        <br />
        Our mission is to bring a sense of joy and happiness to your
        <br />
        everyday life and to remind you to keep the aloha spirit alive.
      </Nav>
    </Nav>
  </Navbar>
);

export default BrandText;
