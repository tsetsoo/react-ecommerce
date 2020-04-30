import { cartActionTypes } from './cart.types'

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeItem = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART
})

export const fetchCartSuccess = (cartItems) => ({
    type: cartActionTypes.FETCH_CART_SUCCESS,
    payload: cartItems
})
export const fetchCartFailure = (errorMessage) => ({
    type: cartActionTypes.FETCH_CART_SUCCESS,
    payload: errorMessage
})

export const setCartItems = (cartItems) => ({
    type: cartActionTypes.SET_CART_ITEMS,
    payload: cartItems
})

export const checkUserCart = () => ({
    type: cartActionTypes.CHECK_USER_CART
})