import React from 'react';
import Checkout from '../stripe/Checkout';



const ConfirmPayment = () => {
  

  return (
  <div>
      
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Complete Payment</h1>
          <p className="lead">
            Become a Premium Member and enjoy all the features
          </p>
          <div className="buttons">
            <Checkout
                name={'Lets Go Premium'}
                description={'Access to view complete profile'}
                amount={1}
            />
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}


export default ConfirmPayment;