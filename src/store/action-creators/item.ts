import { Dispatch } from "redux";
import { ItemAction, ItemActionTypes } from "./../../types/item";

export const addItemToCart =
  (payload: number) => (dispatch: Dispatch<ItemAction>) => {
    dispatch({ type: ItemActionTypes.ADD_ITEM_TO_CART, payload });
  };

export const increaseItemAmount =
  (payload: number) => (dispatch: Dispatch<ItemAction>) => {
    dispatch({ type: ItemActionTypes.INCREASE_ITEM_AMOUNT, payload });
  };

export const decreaseItemAmount =
  (payload: number) => (dispatch: Dispatch<ItemAction>) => {
    dispatch({ type: ItemActionTypes.DECREASE_ITEM_AMOUNT, payload });
  };

export const removeItemFromCart =
  (payload: number) => (dispatch: Dispatch<ItemAction>) => {
    dispatch({ type: ItemActionTypes.REMOVE_ITEM_FROM_CART, payload });
  };
