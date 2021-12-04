export interface ItemState {
  items: Item[];
  cart: Item[];
}

export interface Item {
  id: number;
  name: string;
  price: number;
  image: string;
  amount: number;
}

export enum ItemActionTypes {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  INCREASE_ITEM_AMOUNT = "INCREASE_ITEM_AMOUNT",
  DECREASE_ITEM_AMOUNT = "DECREASE_ITEM_AMOUNT",
  REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
}

interface AddItemToCart {
  type: ItemActionTypes.ADD_ITEM_TO_CART;
  payload: number;
}

interface IncreaseItemAmount {
  type: ItemActionTypes.INCREASE_ITEM_AMOUNT;
  payload: number;
}

interface DecreaseItemAmount {
  type: ItemActionTypes.DECREASE_ITEM_AMOUNT;
  payload: number;
}

interface RemoveItemFromCart {
  type: ItemActionTypes.REMOVE_ITEM_FROM_CART;
  payload: number;
}

export type ItemAction =
  | AddItemToCart
  | IncreaseItemAmount
  | DecreaseItemAmount
  | RemoveItemFromCart;
