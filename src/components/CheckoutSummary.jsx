import React from 'react'
import NumberFormat from 'react-number-format';

const CheckoutSummary = ({item}) => {

  return (
    <div className="order__summary d-flex align-items-center justify-content-between">
      <div className="order__item">
        <h5>{item.title}</h5>
        <span>Qty : {item.quantity}</span>
      </div>
      <div className="order__total">
        <h5>
          <NumberFormat
            value={item.totalPrice}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"IDR "}
            renderText={(value) => value}
          />
        </h5>
      </div>
    </div>
  );
}

export default CheckoutSummary