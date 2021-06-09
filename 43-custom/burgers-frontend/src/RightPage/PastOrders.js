import React from 'react';
import SingleOrder from './SingleOrder'

function PastOrders({orders}){

    let arrayOfComps = orders.map(order => {
      return <SingleOrder key={order.id} order={order} />
    })
  
    return (
      <div className="custom">
        <h2>See Past Orders</h2>
  
        <div id="ordersDiv">
          {arrayOfComps}
        </div>
      </div>
    )
}

export default PastOrders;
