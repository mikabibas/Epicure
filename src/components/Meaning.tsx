import { MEANING_ICONS, SPICY, VEGAN, VEGETERIAN } from "constants/_variables";
import "styles/meaning.scss";

const Meaning = () => {
  return (
    <div className="meaning-container">
      <h1 className="meaning-title">{MEANING_ICONS}</h1>
      <div className="icon-container">
        {}
        <div className="image-text-container">
          <img
            src={require("assets/images/layout/pepper_icon.png")}
            alt="pepper_icon"
          />
          <div className="icon-title">{SPICY}</div>
        </div>
        <div className="image-text-container">
          <img
            src={require("assets/images/layout/leaves_icon.png")}
            alt="leaves_icon"
          />
          <div className="icon-title">{VEGETERIAN}</div>
        </div>
        <div className="image-text-container">
          <img
            src={require("assets/images/layout/leaf_icon.png")}
            alt="leaf_icon"
          />
          <div className="icon-title">{VEGAN}</div>
        </div>
      </div>
    </div>
  );
};
export default Meaning;
