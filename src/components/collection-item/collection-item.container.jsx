import React from 'react'
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'

import CollectionItem from './collection-item.component'

const ADD_ITEM_TO_CART = gql`
    mutation AddItemToCart($item: Item!) {
        addItemToCart(item: $item) @client
    }
`

const CollectionItemContainer = (props) => {
    const [ addItem ] = useMutation(ADD_ITEM_TO_CART)
    return (
        <CollectionItem {...props} addItem={item => addItem({variables: { item }})} />
    )
}

export default CollectionItemContainer