import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialStore = {
  cart: {
    cartItems: [],
  },
};
function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      //add to cart
      const newItem = action.payload;
      const existsItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existsItem
        ? state.cart.cartItems.map((item) =>
            item._id === existsItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };

    // return {
    //   ...state,
    //   cart: {
    //     ...state.cart,
    //     cartItems: [...state.cart.cartItems, action.payload],
    //   },
    // };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialStore);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
