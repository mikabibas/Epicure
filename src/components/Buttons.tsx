import { APP_STORE, DWN_ON, GOOGLE_PLAY, GT_ON } from "constants/variables";

const Buttons = () => {
  return (
    <div className="button-container">
      <button className="market-btn apple-btn">
        <span className="market-button-subtitle">{DWN_ON}</span>
        <span className="market-button-title">{APP_STORE}</span>
      </button>
      <button className="market-btn google-btn">
        <span className="market-button-subtitle">{GT_ON}</span>
        <span className="market-button-title">{GOOGLE_PLAY}</span>
      </button>
    </div>
  );
};
export default Buttons;
