import "./Footer.css";

const Footer = () => {
  return (
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
  );
};

export default Footer;
