import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe= price*100
    const publishableKey = 'pk_test_51JLDoAAleJvR4zLGae25YjwrAvtHtxxQ3Q0wIxmLgycFfoA4gcrxMQn7Y31VqOoFiX74CrnLGmVUqeISW3dsUCaZ00HmZItjWs'

    const onToken = token => {
        console.log(token)
        alert('Payment Succsesful')
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='niaa-wearing'
            billingAddress
            shippingAddress
            image='https://freesvg.org/img/Abstract-Hills-And-Trees-Logo.png'
            description={ `Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton