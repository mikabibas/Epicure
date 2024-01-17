import {
  ABOUT_PARAGRAPH1,
  ABOUT_PARAGRAPH2,
  ABOUT_TITLE,
} from "constants/variables";
import "styles/aboutUs.scss";
import Logo from "./header/Logo";
import logoText from "assets/images/layout/logo_text.png";
import Buttons from "./Buttons";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-text-container">
        <div className="title-paragraph-container">
          <h1 className="about-title">{ABOUT_TITLE}</h1>
          <div className="paragraph-container">
            <p className="about-paragraph">{ABOUT_PARAGRAPH1}</p>
            <p className="about-paragraph">{ABOUT_PARAGRAPH2}</p>
          </div>
        </div>
        <Buttons />
      </div>
      <Logo src={logoText} size={140} />
    </div>
  );
};
export default AboutUs;
