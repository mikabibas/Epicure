import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "store/features/cartSlice";
import "styles/dishModal.scss";

export interface DishModalProps {
  selectedDish: {
    dish_id: string;
    dish_image: string;
    dish_name: string;
    ingredients: string;
    price: number;
    icon: string;
  } | null;
  quantity: number;
  onClose: () => void;
  onQuantityChange: (value: number) => void; // New prop for quantity change
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
                <div className="choose-title">Choose a side</div>
                <div className="input-label-container">
                  <input type="radio" name="side" id="" />
                  <label htmlFor="name">White bread</label>
                </div>
                <div className="input-label-container">
                  <input type="radio" name="side" id="" />
                  <label htmlFor="name">Sticky rice</label>
                </div>
              </div>
              <div className="dish-changes">
                <div className="choose-title">Changes</div>
                <div className="input-label-container checkbox">
                  <input type="checkbox" name="dish-changes" id="" />
                  <label htmlFor="dish-changes">Without peanuts</label>
                </div>
                <div className="input-label-container checkbox">
                  <input type="checkbox" name="dish-changes" id="" />
                  <label htmlFor="dish-changes">Less spicy</label>
                </div>
              </div>
              <div className="quantity">
                <div className="choose-title">Quantity</div>
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
                    onChange={(e) =>
                      onQuantityChange(parseInt(e.target.value, 10))
                    }
                  />
                  <img
                    className="plus-cart"
                    src={require(`assets/images/layout/plus-cart.png`)}
                    alt="plus"
                    onClick={() => onQuantityChange(quantity + 1)}
                  />
                </div>
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </>
        )}
        <img
          src={require(`assets/images/layout/close-modal-btn.png`)}
          alt="close"
          className="modal-close-btn"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default DishModal;
