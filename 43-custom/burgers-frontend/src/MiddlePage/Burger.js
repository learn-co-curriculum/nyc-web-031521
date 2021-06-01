import React from 'react';

function Burger({burger, addToCart}){

  const handleClick = (e) => {
    addToCart(burger)
  }

  return (
    <div className="burger">
      <h3 className="burger_title">{burger.name} - ${burger.price}</h3>
        <img src={burger.image} alt={burger.name}/>
        <p className="burger_description">
          {burger.description}
        </p>
       <button className="button" onClick={handleClick}>Add to Order</button>
    </div>

  )
}

export default Burger;
