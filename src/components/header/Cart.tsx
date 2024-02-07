import React from "react";
import { useAppSelector } from "store/store";
import "styles/header/cart.scss";
import emptyCartImage from "assets/images/layout/empty-cart.png";

const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);
  const restaurantState = useAppSelector((state) => state.restaurants);
  console.log("Cart items:", cart.items);

  const uniqueRestaurantId =
    cart.items.length > 0 ? cart.items[0].dish.restaurant?.id : null;

  const restaurant = uniqueRestaurantId
    ? restaurantState.restaurants.find((r) => r._id === uniqueRestaurantId)
    : null;

  return (
    <div className="cart-container">
      {cart.items.length > 0 && (
        <div className="full-cart-container">
          <h2>Your Order</h2>
          {restaurant && (
            <div>
              <p>Restaurant: {restaurant.res_name}</p>
            </div>
          )}
        </div>
      )}

      {cart.items.length === 0 ? (
        <div className="empty-cart-container">
          <img
            className="empty-cart-image"
            src={emptyCartImage}
            alt="Your cart is empty"
          />
          <p>Your cart is empty</p>
          <button onClick={() => console.log("Order History clicked")}>
            Order History
          </button>
        </div>
      ) : (
        <ul>
          {cart.items.map((item) => (
            <li key={item.dish.dish_id}>
              <img
                className="cart-dish-image"
                src={require(`assets/images/food/${item.dish.dish_image}`)}
                alt={item.dish.dish_name}
              />
              <div>
                <p>{item.dish.dish_name}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
