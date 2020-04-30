import { takeLatest, put, all, call, select } from 'redux-saga/effects'
import { firestore, convertUserToCartItemsMap, storeCartItems } from '../../firebase/firebase.utils'
import UserActionTypes from './../user/user.types'
import { selectCurrentUser } from '../user/user.selectors'
import { clearCart, fetchCartSuccess, fetchCartFailure, setCartItems } from './cart.actions'
import { cartActionTypes } from './cart.types'
import { selectCartItems } from './cart.selectors'

export function* clearCartOnSignOut() {
    yield put(clearCart())
}

export function* signOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* signInSuccess() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, fetchCartAsync)
}

export function* fetchCartAsync() {
    try {
        localStorage.removeItem('local-cart-items')
        const currentUser = yield select(selectCurrentUser)
        const userRef = firestore.doc(`users/${currentUser.id}`)

        const snapshop = yield userRef.get()
        const collectionsMap = yield call(convertUserToCartItemsMap, snapshop)

        yield put(fetchCartSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCartFailure(error.message))
    }
}

export function* checkUserCart() {
    const currentUser = yield select(selectCurrentUser)
    if (currentUser == null) {
        const localCart = localStorage.getItem('local-cart-items')
        if (localCart != null) {
            yield put(setCartItems(JSON.parse(localCart)))
        }
    }
}

export function* onCheckUserCart() {
    yield takeLatest(cartActionTypes.CHECK_USER_CART, checkUserCart)
}

export function* storeCart() {
    const currentUser = yield select(selectCurrentUser)
    const cartItems = yield select(selectCartItems)
    if (currentUser == null) {
        yield localStorage.setItem('local-cart-items', JSON.stringify(cartItems))
    } else {
        yield call(storeCartItems, currentUser, cartItems)
    }
}

export function* onCartChange() {
    yield takeLatest([cartActionTypes.ADD_ITEM, cartActionTypes.CLEAR_CART, cartActionTypes.CLEAR_ITEM_FROM_CART, cartActionTypes.REMOVE_ITEM, cartActionTypes.FETCH_CART_SUCCESS], storeCart);
}

export function* cartSagas() {
    yield all([
       call(signOutSuccess), call(signInSuccess), call(onCheckUserCart), call(onCartChange)
    ])
}