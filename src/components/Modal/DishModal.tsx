import {
  CHOOSE_SIDE,
  CHANGES,
  STICKY_RICE,
  WHITE_BREAD,
  NO_PNTS,
  LESS_SPICY,
  QTY,
  ADD_TO_CART,
} from "constants/variables";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "store/features/cartSlice";
import "styles/dishModal.scss";

interface RestaurantArrDish {
  id: string;
  name: string;
}

export interface DishModalProps {
  selectedDish: {
    dish_id: string;
    dish_image: string;
    dish_name: string;
    ingredients: string;
    price: number;
    icon: string;
    restaurant: RestaurantArrDish;
  } | null;
  quantity: number;
  onClose: () => void;
  onQuantityChange: (value: number) => void;
}

const DishModal: React.FC<DishModalProps> = ({
  selectedDish,
  quantity,
  onClose,
  onQuantityChange,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (selectedDish) {
      const cartItem = { dish: selectedDish, quantity };
      dispatch(addToCart(cartItem));
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="dish-modal" onClick={(e) => e.stopPropagation()}>
        {selectedDish && (
          <>
            <img
              className="modal-dish-image"
              src={require(`assets/images/food/${selectedDish.dish_image}`)}
              alt={selectedDish.dish_name}
            />
            <div className="modal-text-container">
              <div className="modal-dish-info">
                <h2 className="modal-dish-name">{selectedDish.dish_name}</h2>
                <p className="modal-ingredients">{selectedDish.ingredients}</p>
                <img
                  className="modal-icon"
                  src={require(`assets/images/layout/${selectedDish.icon}`)}
                  alt={selectedDish.icon}
                />
                <p className="modal-price">
                  <span>₪ {selectedDish.price}</span>
                </p>
              </div>
              <div className="modal-choice-container">
                <div className="choose-side">
                  <div className="choose-title">{CHOOSE_SIDE}</div>
                  <div className="input-label-container">
                    <input type="radio" name="side" id="" />
                    <label htmlFor="name">{WHITE_BREAD}</label>
                  </div>
                  <div className="input-label-container">
                    <input type="radio" name="side" id="" />
                    <label htmlFor="name">{STICKY_RICE}</label>
                  </div>
                </div>
                <div className="dish-changes">
                  <div className="choose-title">{CHANGES}</div>
                  <div className="input-label-container checkbox">
                    <input type="checkbox" name="dish-changes" id="" />
                    <label htmlFor="dish-changes">{NO_PNTS}</label>
                  </div>
                  <div className="input-label-container checkbox">
                    <input type="checkbox" name="dish-changes" id="" />
                    <label htmlFor="dish-changes">{LESS_SPICY}</label>
                  </div>
                </div>
                <div className="quantity">
                  <div className="choose-title">{QTY}</div>
                  <div className="counter-buttons">
                    <img
                      className="minus-cart"
                      src={require(`assets/images/layout/minus-cart.png`)}
                      alt="minus"
                      onClick={() => onQuantityChange(quantity - 1)}
                    />
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value, 10);
                        onQuantityChange(newQuantity);
                        if (selectedDish) {
                          const cartItem = {
                            dish: selectedDish,
                            quantity: newQuantity,
                          };
                          dispatch(addToCart(cartItem));
                        }
                      }}
                    />
                    <img
                      className="plus-cart"
                      src={require(`assets/images/layout/plus-cart.png`)}
                      alt="plus"
                      onClick={() => onQuantityChange(quantity + 1)}
                    />
                  </div>
                  <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    {ADD_TO_CART}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        <img
          src={require(`assets/images/layout/close-modal-btn.png`)}
          alt="close"
          className="modal-close-btn-desktop"
          onClick={onClose}
        />
        <img
          src={require(`assets/images/layout/modal-close-btn-black.png`)}
          alt="close"
          className="modal-close-btn-mobile"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default DishModal;
