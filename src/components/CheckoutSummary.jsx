import React from 'react'

const CheckoutSummary = ({item}) => {

  return (
    <div className="order__summary d-flex align-items-center justify-content-between">
      <div className="order__item">
        <h5>{item.title}</h5>
        <span>Qty : {item.quantity}</span>
      </div>
      <div className="order__total">
        <h5>IDR {item.totalPrice}</h5>
      </div>
    </div>
  );
}

export default CheckoutSummary