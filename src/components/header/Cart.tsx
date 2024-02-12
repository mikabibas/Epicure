import React from "react";
import { useAppSelector } from "store/store";
import "styles/header/cart.scss";
import emptyCartImage from "assets/images/layout/empty-cart.png";
import {
  CHECKOUT,
  ORDER_HISTORY,
  TXTAREA_PLACEHOLDER,
  YOUR_ORDER,
} from "constants/variables";

const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);
  const restaurantState = useAppSelector((state) => state.restaurants);

  const calculateTotalPrice = (): number => {
    return cart.items.reduce(
      (total, item) => total + item.quantity * item.dish.price,
      0
    );
  };

  const findRestaurantById = (restaurantId: string | null) => {
    return restaurantId
      ? restaurantState.restaurants.find((r) => r._id === restaurantId)
      : null;
  };

  const uniqueRestaurantId =
    cart.items.length > 0 ? cart.items[0].dish.restaurant?.id : null;

  const restaurant = findRestaurantById(uniqueRestaurantId);

  return (
    <div className="cart-container">
      {cart.items.length === 0 ? (
        <div className="empty-cart-container">
          <img
            className="empty-cart-image"
            src={emptyCartImage}
            alt="Your cart is empty"
          />
          <p className="cart-empty-text">Your bag is empty</p>
          <button className="order-history-btn">Order History</button>
        </div>
      ) : (
        <div className="full-cart-container">
          <h2 className="your-order-text">{YOUR_ORDER}</h2>
          {restaurant && (
            <div>
              <p className="cart-rest-name">{restaurant.res_name}</p>
            </div>
          )}
          <ul className="cart-items-container">
            {cart.items.map((item) => (
              <li className="cart-item" key={item.dish.dish_id}>
                <img
                  className="cart-dish-image"
                  src={require(`assets/images/food/${item.dish.dish_image}`)}
                  alt={item.dish.dish_name}
                />
                <div className="cart-item-info">
                  <div className="quantity-dish-name-container">
                    <p className="cart-dish-quantity">{item.quantity}</p>
                    <p className="cart-dish-name">{item.dish.dish_name}</p>
                  </div>
                  <div className="side-changes-container">
                    <p className="cart-dish-side">{item.selectedSide}</p>
                    <p className="cart-dish-changes">
                      {item.changes.join(", ")} |
                    </p>
                  </div>
                  <div className="cart-dish-price">{item.dish.price} ₪</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <span>₪ {calculateTotalPrice()}</span>
          </div>
          <div className="big-comment-container">
            <div className="add-comment">Add a comment</div>
            <div className="comment-container">
              <input placeholder={TXTAREA_PLACEHOLDER} type="text" />
            </div>
          </div>
          <div className="cart-btn-container">
            <button className="checkout-btn">{CHECKOUT}</button>
            <button className="order-history-btn">{ORDER_HISTORY}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
