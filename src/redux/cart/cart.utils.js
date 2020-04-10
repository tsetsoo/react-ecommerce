export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCardItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if (existingCardItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    } else {
        return [...cartItems, {...cartItemToAdd, quantity: 1}]
    }
}

export const removeItemFromCart = (cartItems, cartItemToAdd) => {
    const existingCardItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
    if (existingCardItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        )
    } else {
        return cartItems
    }
}