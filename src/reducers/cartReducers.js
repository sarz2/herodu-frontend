import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      //check to see if the user already has the selected item in their cart
      const itemExists =
        state.cartItems !== null
          ? state.cartItems.find(
              (cartItem) => cartItem.product === item.product
            )
          : null;

      if (itemExists !== null) {
        //if the product exists then map through the array and replace the item with the new one that the user chose
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === itemExists.product ? item : i
          ),
        };
      } else if (state.cartItems === null) {
        //if the user has nothing in the cart then add the item that they chose
        return {
          ...state,
          cartItems: [item],
        };
      } else {
        //if the user has more things in their cart, return a new array with all previous products and add the new item
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
