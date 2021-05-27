import React from "react";

// Convert to a class component (render, this.props)

// creating a Class component that has some built-in functionality from the base React.Component class
class Search extends React.Component {
  // render is a method, React will call this method when it's time to render our component

  render() {
    const { searchTerm, onUpdateSearch } = this.props;

    return (
      <div className="searchbar">
        <label htmlFor="search">Search Plants:</label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          /* when we want to use props, we must do: this.props */
          value={searchTerm}
          onChange={(e) => onUpdateSearch(e.target.value)}
        />
      </div>
    );
  }
}

// <Search searchTerm="hello" />

// const interalComponent = new Search({ searchTerm: "hello" })

// interalComponent.render()

// function Search({ searchTerm, onUpdateSearch }) {
//   return (
//     <div className="searchbar">
//       <label htmlFor="search">Search Plants:</label>
//       <input
//         type="text"
//         id="search"
//         placeholder="Type a name to search..."
//         value={searchTerm}
//         onChange={(e) => onUpdateSearch(e.target.value)}
//       />
//     </div>
//   );
// }

export default Search;
