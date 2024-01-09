import MediaQuery from "react-responsive";
import {
  ABOUT_PARAGRAPH1,
  ABOUT_PARAGRAPH2,
  ABOUT_TITLE,
} from "constants/variables";
import "styles/aboutUs.scss";
import Logo from "./header/Logo";
import logoText from "assets/images/layout/logo_text.png";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-text-container">
        <h1 className="about-title">{ABOUT_TITLE}</h1>
        <div className="paragraph-container">
          <p className="about-paragraph">{ABOUT_PARAGRAPH1}</p>
          <p className="about-paragraph">{ABOUT_PARAGRAPH2}</p>
        </div>
        <MediaQuery minWidth={780}>
          <button className="market-btn apple-btn">
            <span className="market-button-subtitle">Download on the</span>
            <span className="market-button-title">App Store</span>
          </button>
          <button className="market-btn google-btn">
            <span className="market-button-subtitle">Get it on</span>
            <span className="market-button-title">Google Play</span>
          </button>
        </MediaQuery>
      </div>
      <MediaQuery maxWidth={780}>
        <button className="market-btn apple-btn">
          <span className="market-button-subtitle">Download on the</span>
          <span className="market-button-title">App Store</span>
        </button>
        <button className="market-btn google-btn">
          <span className="market-button-subtitle">Get it on</span>
          <span className="market-button-title">Google Play</span>
        </button>
      </MediaQuery>
      <MediaQuery minWidth={780}>
        <Logo src={logoText} size={170} />
      </MediaQuery>
      <MediaQuery maxWidth={780}>
        <Logo src={logoText} size={100} />
      </MediaQuery>
    </div>
  );
};
export default AboutUs;
