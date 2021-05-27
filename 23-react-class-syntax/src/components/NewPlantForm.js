import React from "react";

// Convert to a class component (state, instance methods)
class NewPlantForm extends React.Component {
  state = {
    name: "",
    image: "",
    price: "",
  };

  // use arrow fn syntax for methods to keep track of the correct 'this'
  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleImageChange = (e) => {
    this.setState({ image: e.target.value });
  };

  handlePriceChange = (e) => {
    this.setState({ price: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: this.state.name,
      image: this.state.image,
      price: parseFloat(this.state.price),
      eric: "a nice guy",
    };
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newPlant) => {
        this.props.onAddNewPlant(newPlant);
      });
  };

  render() {
    return (
      <div className="new-plant-form">
        <h2>New Plant</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Plant name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={this.state.image}
            onChange={this.handleImageChange}
          />
          <input
            type="number"
            name="price"
            step="0.01"
            placeholder="Price"
            value={this.state.price}
            onChange={this.handlePriceChange}
          />
          <button type="submit">Add Plant</button>
        </form>
      </div>
    );
  }
}

// function NewPlantForm({ onAddNewPlant }) {
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");
//   const [price, setPrice] = useState("");

//   function handleNameChange(e) {
//     setName(e.target.value);
//   }

//   function handleImageChange(e) {
//     setImage(e.target.value);
//   }

//   function handlePriceChange(e) {
//     setPrice(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     const formData = {
//       name: name,
//       image: image,
//       price: parseFloat(price),
//       eric: "a nice guy",
//     };
//     fetch("http://localhost:6001/plants", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((newPlant) => {
//         onAddNewPlant(newPlant);
//       });
//   }

//   return (
//     <div className="new-plant-form">
//       <h2>New Plant</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Plant name"
//           value={name}
//           onChange={handleNameChange}
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Image URL"
//           value={image}
//           onChange={handleImageChange}
//         />
//         <input
//           type="number"
//           name="price"
//           step="0.01"
//           placeholder="Price"
//           value={price}
//           onChange={handlePriceChange}
//         />
//         <button type="submit">Add Plant</button>
//       </form>
//     </div>
//   );
// }

export default NewPlantForm;
