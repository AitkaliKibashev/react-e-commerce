import React, { FC } from "react";
import { Item } from "../types/item";
interface FoodCardCartProps {
  food: Item;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
  removeItemFromCart: (id: number) => void;
}

export const FoodCardCart: FC<FoodCardCartProps> = ({
  food,
  increaseAmount,
  decreaseAmount,
  removeItemFromCart,
}) => {
  const totalPrice = Math.round(food.price * food.amount * 100) / 100;

  if (food.amount === 0) {
    removeItemFromCart(food.id);
  }

  return (
    <div className="food-card cart">
      <div className="food-image cart">
        <div className="food-amount-on-image">
          <p>{food.amount}</p>
        </div>
        <img src={food.image} alt="food" />
      </div>
      <div className="food-info cart">
        <p className="food-name cart">{food.name}</p>
        <p className="food-price cart">${food.price}</p>
        <div className="card-footer">
          <div className="more-less-block">
            <div
              className="less-btn"
              onClick={() => decreaseAmount(food.id)}
            ></div>
            <div className="amount">{food.amount}</div>
            <div
              className="more-btn"
              onClick={() => increaseAmount(food.id)}
            ></div>
          </div>
          <p className="price">${totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCardCart;
