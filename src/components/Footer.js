import "./Footer.css";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <div className="footer-container">
          <div className="footer-text contact-container">
            <p>Contact</p>
            <ul>
              <li>Tel: 012345678</li>
              <li>Email: email@email.se</li>
              <li>Address: StreetName</li>
            </ul>
          </div>
          <div className="copyright">
            <p className="footer-text">Copyright ⓒ Herodu</p>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
