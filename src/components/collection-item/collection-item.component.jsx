import React from 'react'
import { connect } from 'react-redux'

import { addItem } from '../../redux/cart/cart.actions'

import { CollectionItemContainer, FooterContainer, NameContainer, PriceContainer, AddButton, BackgroundImage } from './collection-item.styles'

const CollectionItem = ( { item, addItem } ) => {
    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={item.imageUrl}/>
            <FooterContainer>
                <NameContainer>{item.name}</NameContainer>
                <PriceContainer>${item.price}</PriceContainer>
            </FooterContainer>
            <AddButton inverted onClick={() => addItem(item)}> Add to cart </AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem);