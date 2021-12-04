import React, { FC } from "react";
import { Item } from "../types/item";

interface FoodCardProps {
  food: Item;
  cart: Item[];
  addToCard: (id: number) => void;
  increaseAmount: (id: number) => void;
}

const FoodCard: FC<FoodCardProps> = ({
  food,
  addToCard,
  cart,
  increaseAmount,
}) => {
  const clickHandler = () => {
    if (cart.find((i) => i.id === food.id)) {
      increaseAmount(food.id);
    } else {
      addToCard(food.id);
    }
  };
  return (
    <div className="food-card">
      <div className="food-image">
        <img src={food.image} alt="food" />
      </div>
      <div className="food-info">
        <p className="food-name">{food.name}</p>
        <p className="food-price">${food.price}</p>
        <button className="add-to-card-btn" onClick={clickHandler}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
