import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import {CartDropdownContainer, EmptyMessageContainer, CartItemsContainer} from './cart-dropdown.styles.jsx'

const CartDropdown= ({cartItems, history, dispatch}) => {
    return (
        <CartDropdownContainer>
            {
                cartItems.length ? 
                <CartItemsContainer>
                    {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)}
                </CartItemsContainer> :
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            }
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>Go to checkout</CustomButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
