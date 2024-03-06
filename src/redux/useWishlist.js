import { useEffect, useReducer } from "react";

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  //initializer behaves like useEffect that is funct is trigger only once when page mounts. so it takes the data from local storage

  //localstorage can take only string values
  const initializer = (initial) => {
    const persistedValue = localStorage.getItem(localStorageKey);

    return persistedValue ? JSON.parse(persistedValue) : initial; //this returned value will act as the inital state pr in useReducer
  };

  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};

const wishlistReducer = (currentWishlist, action) => {
  switch (action.type) {
    case "LIKE":
      return currentWishlist.concat(action.id);
    case "UNLIKE":
      return currentWishlist.filter((id) => id !== action.id); //is return true then allow that item to stay in array but if false then removes it
    default:
      return currentWishlist;
  }
};

export const useWishlistProducts = () => {
  return usePersistedReducer(wishlistReducer, [], "wishlist");
};
