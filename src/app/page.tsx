import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './style.css';
import ShippingBanner from '@/components/ShippingBanner';
import TopNavbar from '@/components/TopNavbar';
import BrandText from '@/components/BrandText';
import PalmBanner from '@/components/PalmBanner';
import Footer from '@/components/Footer';

const Home = () => (
  <main>
    <Container fluid id="footer">
      <ShippingBanner />
      <TopNavbar />
      <BrandText />
      <PalmBanner />
      <Footer />
    </Container>
  </main>
);

export default Home;
