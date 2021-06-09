import React from 'react';
import CurrentOrder from '../LeftPage/CurrentOrder'
import MenuContainer from '../MiddlePage/MenuContainer'
import PastOrders from '../RightPage/PastOrders'


function BurgerContainer({burgers, addToCart, cart, orders, createSingleOrder}){

    return(
      <div className="container">
        <CurrentOrder cart={cart} createSingleOrder={createSingleOrder}/>
        <MenuContainer burgers={burgers} addToCart={addToCart}/>
        <PastOrders orders={orders}/>
      </div>
    )
}

export default BurgerContainer;
