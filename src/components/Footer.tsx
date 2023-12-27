import {
  CONTACT_US,
  PRIVACY_POLICY,
  TERM_OF_USE,
} from "../constants/_variables";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="text-container">
        <h3>{CONTACT_US}</h3>
        <h3>{TERM_OF_USE}</h3>
        <h3>{PRIVACY_POLICY}</h3>
      </div>
    </div>
  );
};

export default Footer;
