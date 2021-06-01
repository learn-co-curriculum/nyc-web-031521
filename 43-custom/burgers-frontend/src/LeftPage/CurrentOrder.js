import React from 'react';

function CurrentOrder({cart, createSingleOrder}){

    let totalSum = cart.reduce((total, burger) => {
        return total + burger.price
    }, 0)

    let arrOfBurgerName = cart.map((burger, idx) => {
        return <p key={idx}>{burger.name}</p>
    })

    const handleClick = (e) => {
        createSingleOrder()
    }


    return (
    <div className="order">
        <h2>Your Orders</h2>
        <ul id="order-list">
            {arrOfBurgerName}
        </ul>
        <h3>Total Price: $<span id="total">{totalSum}</span></h3>
        <button onClick={handleClick} className="submit">Place an Order </button>
    </div>
    )
}

export default CurrentOrder;
