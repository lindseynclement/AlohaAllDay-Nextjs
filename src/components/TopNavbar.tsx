'use client';

import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { BagFill, Facebook, Instagram } from 'react-bootstrap-icons';

const TopNavbar = () => (
  <Navbar id="topNavbar">
    <Container className="d-flex justify-content-between align-items-center">
      <Image id="logo" src="/logo.webp" alt="Company Logo" width={50} height={50} />

      <Nav id="topNavbarText">
        <div>NEW ARRIVALS</div>
      </Nav>

      <Nav id="topNavbarText">
        <div>CLOTHING</div>
      </Nav>

      <Nav id="topNavbarText">
        <div>ACCESSORIES</div>
      </Nav>

      <Nav id="topNavbarText">
        <div>KEIKI</div>
      </Nav>

      <Nav id="topNavbarText">
        <div>HOME DECOR</div>
      </Nav>

      <div className="d-flex align-items-center">
        <div style={{ position: 'relative', display: 'inline-block', zIndex: 1 }}>
          <div style={{ position: 'relative' }}>
            <BagFill size={30} />
          </div>
        </div>
        <div className="row">
          <Facebook className="me-3" />
          <Instagram />
        </div>
      </div>

    </Container>
  </Navbar>
);

export default TopNavbar;
