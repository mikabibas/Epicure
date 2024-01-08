import {
  CONTACT_US,
  PRIVACY_POLICY,
  TERM_OF_USE,
} from "../constants/variables";
import "../styles/footerDesktop.scss";

const FooterDesktop = () => {
  return (
    <div className="footer-desktop-container">
      <div className="footer-text-container">
        <h3>{CONTACT_US}</h3>
        <h3>{TERM_OF_USE}</h3>
        <h3>{PRIVACY_POLICY}</h3>
      </div>
    </div>
  );
};

export default FooterDesktop;
