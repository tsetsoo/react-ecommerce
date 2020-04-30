import { cartActionTypes } from './cart.types'
import { addItemToCart, removeItemFromCart, mergeCartItems } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    cartFetchError: ''
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case cartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        case cartActionTypes.FETCH_CART_SUCCESS:
            return {
                ...state,
                cartItems: mergeCartItems(state.cartItems, action.payload)
            }
        case cartActionTypes.FETCH_CART_FAILURE:
            return {
                ...state,
                cartFetchError: action.payload
            }
        case cartActionTypes.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload
            }
        default:
            return state;
    }
}

export default cartReducer;