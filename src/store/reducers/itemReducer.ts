import { ItemState, ItemAction, ItemActionTypes } from "../../types/item";

const initialState: ItemState = {
  items: [
    {
      id: 1,
      name: "French Fries with Ketchup",
      price: 2.23,
      image: "./assets/images/plate__french-fries.png",
      amount: 1,
    },
    {
      id: 2,
      name: "Salmon and Vegetables",
      price: 5.12,
      image: "./assets/images/plate__salmon-vegetables.png",
      amount: 1,
    },
    {
      id: 3,
      name: "Spaghetti with Sauce",
      price: 7.02,
      image: "./assets/images/plate__spaghetti-meat-sauce.png",
      amount: 1,
    },
    {
      id: 4,
      name: "Fish sticks anf Fries",
      price: 6.03,
      image: "./assets/images/plate__fish-sticks-fries.png",
      amount: 1,
    },
    {
      id: 5,
      name: "Tortellini",
      price: 3.52,
      image: "./assets/images/plate__tortellini.png",
      amount: 1,
    },
  ],
  cart: [],
};

export const itemReducer = (
  state = initialState,
  action: ItemAction
): ItemState => {
  switch (action.type) {
    case ItemActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: [
          ...state.items.filter((i) => i.id === action.payload),
          ...state.cart,
        ],
      };
    case ItemActionTypes.INCREASE_ITEM_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((i) =>
          i.id === action.payload ? { ...i, amount: i.amount + 1 } : i
        ),
      };
    case ItemActionTypes.DECREASE_ITEM_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((i) =>
          i.id === action.payload ? { ...i, amount: i.amount - 1 } : i
        ),
      };
    case ItemActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== action.payload),
      };

    default:
      return state;
  }
};
