import React from 'react'
import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'

import CheckoutPage from './checkout.component'

const GET_CART_ITEMS = gql`
    {
        cartItems @client
    }
`

const GET_TOTAL = gql`
    {
        total @client
    }
`

const CheckoutPageContainer = () => {
    const {data: {total}} = useQuery(GET_TOTAL)
    const {data: {cartItems}} = useQuery(GET_CART_ITEMS)
    return (
        <CheckoutPage cartItems={cartItems} total={total}/>
    )
}

export default CheckoutPageContainer