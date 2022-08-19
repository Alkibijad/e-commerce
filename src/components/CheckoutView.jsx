import React from 'react'
import ContactPage from './pages/ContactPage'

function CheckoutForm({ setToCheckout}) {
  return (
      <div className='checkout-form'>
      
          <button onClick={() => { setToCheckout(false)}}>checkout</button>
    </div>
  )
}

export default CheckoutForm