import React from 'react';
import CheckoutForm from "./CheckoutForm"


function CheckoutView({ setToCheckout}) {
  return (
    <div className='checkout-form'>
      
      <CheckoutForm setToCheckout={ setToCheckout} />
      
       
    </div>
  )
}

export default CheckoutView