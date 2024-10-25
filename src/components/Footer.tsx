'use client';

const Footer = () => (
  <footer>
    <div className="container-fluid d-flex justify-content-center">
      <div className="row py-4">
        <div className="col" style={{ width: '300px', marginRight: '10px' }}>
          <div style={{ fontSize: '17px', fontFamily: 'Avenir', fontWeight: 50, marginBottom: '5px' }}>Info</div>
          <div style={{ fontSize: '14px', fontFamily: 'Avenir' }}><u><strong>Shipping & Returns</strong></u></div>
          <div style={{ fontSize: '14px', fontFamily: 'Avenir' }}><u><strong>Store Policy</strong></u></div>
        </div>

        <div className="col" style={{ marginRight: '40px' }}>
          <div style={{ fontSize: '17px', fontFamily: 'Avenir', fontWeight: 50, marginBottom: '5px' }}>Contact</div>
          <div style={{ fontSize: '14px', fontFamily: 'Avenir' }}><strong>Email:</strong></div>
          <div style={{
            fontSize: '14px',
            fontFamily: 'Avenir',
          }}
          >
            <u>
              <strong>alohaallday.hawaii@gmail.com</strong>
            </u>
          </div>
        </div>

        <div className="col">
          <div style={{ fontSize: '17px', fontFamily: 'Avenir', fontWeight: 50, marginBottom: '5px' }}>Follow us</div>
          <div style={{ fontSize: '14px', fontFamily: 'Avenir' }}><strong>Facebook</strong></div>
          <div style={{ fontSize: '14px', fontFamily: 'Avenir' }}><u><strong>Instagram</strong></u></div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
