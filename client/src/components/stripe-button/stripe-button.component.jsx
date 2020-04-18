import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStrip = price * 100
    const pk = 'pk_test_4VIxvJVpStNV9KSQPjVZPTMR00Sxnsbhkx'
    return (
        <StripeCheckout 
            label='Pay Now'
            name='React Ecommerce'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStrip}
            panelLabel='Pay Now'
            token={(token) => {
                console.log(token)
                alert('Payment successful')
            }}
            stripeKey={pk}
        />
    )
}

export default StripeCheckoutButton
