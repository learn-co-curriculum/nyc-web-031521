import React, { useState } from "react";

function PlantCard({ plant, onRemovePlant, onUpdatePlant }) {
  const { name, image, price, id } = plant;

  const [isInStock, setIsInStock] = useState(true);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  function handleToggleInStock() {
    setIsInStock(!isInStock);
  }

  function handlePriceSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: parseFloat(updatedPrice) }),
    })
      .then((r) => r.json())
      .then((updatedPlant) => {
        onUpdatePlant(updatedPlant);
      });
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    });
    // .then((r) => r.json())
    // .then((emptyObj) => {
    //   update state!
    //   pessimistic rendering
    //   console.log(emptyObj);
    // });

    // optimistic rendering
    // update state!
    onRemovePlant(id);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleToggleInStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleToggleInStock}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>

      <form onSubmit={handlePriceSubmit}>
        <input
          type="number"
          step="0.01"
          placeholder="New price..."
          value={updatedPrice}
          onChange={(e) => setUpdatedPrice(e.target.value)}
        />
        <button type="submit">Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
