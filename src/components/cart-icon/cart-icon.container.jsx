import React from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'

import CartIcon from './cart-icon.component'

const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`

const GET_ITEM_COUNT = gql`
    {
        itemCount @client
    }
`

const CartIconContainer = () => {
    const [ toggleCartHidden ] = useMutation(TOGGLE_CART_HIDDEN)
    const { data: { itemCount } } = useQuery(GET_ITEM_COUNT)
    return (
        <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount}/>
    )
}

export default CartIconContainer