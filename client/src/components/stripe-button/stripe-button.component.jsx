import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(err => {
            console.log('Payment error: ', JSON.parse(err))
            alert('Payment failed, please use test credit card')
        })
    }

    const pk = 'pk_test_4VIxvJVpStNV9KSQPjVZPTMR00Sxnsbhkx'
    return (
        <StripeCheckout 
            label='Pay Now'
            name='React Ecommerce'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={pk}
        />
    )
}

export default StripeCheckoutButton
