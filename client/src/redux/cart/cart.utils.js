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

export const mergeCartItems = (cartItems, newCartItems) => {
    newCartItems.forEach(newCartItem => {
        const existingCardItem = cartItems.find(cartItem => cartItem.id === newCartItem.id)
        const quantityToAdd = newCartItem.quantity
        if (existingCardItem) {
            cartItems = cartItems.map(cartItem =>
                cartItem.id === newCartItem.id ? {...cartItem, quantity: cartItem.quantity + quantityToAdd}
                : cartItem
            )
        } else {
            cartItems = [...cartItems, {...newCartItem, quantity: quantityToAdd}]
        }
    })
    return cartItems
}