import React from "react";
import "./App.css";
import FoodCard from "./components/FoodCard";
import FoodCardCart from "./components/FoodCardCart";
import { UseActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";

function App() {
  const { items, cart } = useTypedSelector((state) => state.item);

  const {
    addItemToCart,
    increaseItemAmount,
    decreaseItemAmount,
    removeItemFromCart,
  } = UseActions();

  const subTotal =
    Math.round(
      cart.length &&
        cart
          .map((i) => i.price * i.amount)
          .reduce((prev, next) => prev + next) * 100
    ) / 100;
  const tax = Math.round(subTotal * 0.0975 * 100) / 100;
  const total = Math.round((subTotal + tax) * 100) / 100;

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">To Go Menu</h1>
        {items.map((item) => (
          <FoodCard
            key={item.id}
            food={item}
            cart={cart}
            addToCard={addItemToCart}
            increaseAmount={increaseItemAmount}
          />
        ))}
      </div>
      <div className="container">
        <h1 className="title">Your Cart</h1>
        {cart.length ? (
          <>
            {cart.map((item) => (
              <>
                <FoodCardCart
                  key={item.id}
                  food={item}
                  decreaseAmount={decreaseItemAmount}
                  increaseAmount={increaseItemAmount}
                  removeItemFromCart={removeItemFromCart}
                />
                <div className="decor-line" />
              </>
            ))}
            <div className="decor-line bold" />
            <div className="price-box">
              <p className="subtitle">Subtotal:</p>
              <p className="price">${subTotal}</p>
            </div>
            <div className="price-box">
              <p className="subtitle">Tax:</p>
              <p className="price">${tax}</p>
            </div>
            <div className="price-box">
              <p className="subtitle">Total:</p>
              <p className="price total">${total}</p>
            </div>
          </>
        ) : (
          <p className="empty-cart">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default App;
