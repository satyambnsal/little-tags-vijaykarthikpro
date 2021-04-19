import { 
  SET_AUTH_USER, 
  REMOVE_AUTH_USER, 
  ADD_ITEM_TO_CART, 
  REMOVE_ITEM_FROM_CART, 
  CONFIRM_ORDER, 
  CANCEL_ORDER,
  ADD_ITEM_TO_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST,
  UPDATE_WISHLIST_ITEM } from '../constants/actionTypes';

// User actions

export const setAuthUser = (authUser) => ({
  type: SET_AUTH_USER,
  authUser,
  isUserLoggedIn: authUser ? true : false
});

export const removeAuthUser = () => ({
  type: REMOVE_AUTH_USER
});


// Cart actions

export const addItemToCart = (product) => ({
  type: ADD_ITEM_TO_CART,
  product
});

export const removeItemFromCart = (id) => ({
  type: REMOVE_ITEM_FROM_CART,
  id
})

export const updateItemInCart = (id, size, quantity) => ({
  type: REMOVE_ITEM_FROM_CART,
  id,
  size,
  quantity
})


// Orders actions

export const confirmOrder = (product) => ({
  type: CONFIRM_ORDER,
  product
});

export const cancelOrder = (id) => ({
  type: CANCEL_ORDER,
  id
})

// wishlist actions

export const addItemToWishlist = (product) => ({
  type: ADD_ITEM_TO_WISHLIST,
  product
});

export const removeItemFromWishlist = (id) => ({
  type: REMOVE_ITEM_FROM_WISHLIST,
  id
})

export const updateItemInWishlist = (id, size, quantity) => ({
  type: UPDATE_WISHLIST_ITEM,
  id,
  size,
  quantity
})