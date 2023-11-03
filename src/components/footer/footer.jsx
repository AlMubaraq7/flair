import "./footer.scss";
import icon from "../../../public/favicon.svg";
const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="col-1">
          <div className="footer-logo-box">
            <img src={icon} className="footer-logo" />
            <h2>Flair</h2>
          </div>
          <div className="footer-social-icon"></div>
        </div>
        <div className="col-2">
          <h2>Contact us</h2>
          <span>hello@flair.co</span>
          <span>24 Atlantic Ave. Brooklyn, NY 11201 Flair inc.</span>
          <span>+34 000 000 00 00</span>
        </div>
        <div className="col-3">
          <h2>Subscribe</h2>
          <span>Enter your email to get notified about our newsletter. </span>
          <form>
            <input type="email" placeholder="E-mail" className="footer-email" />
          </form>
        </div>
      </div>
    </section>
  );
};
export default Footer;
