import React from "react";

function Header({ onToggleDarkMode, isDarkMode, title, logo }) {
  function handleDarkModeClick() {
    onToggleDarkMode();
  }

  return (
    <header>
      <h1>
        <span className="logo">{logo}</span>
        {title}
      </h1>
      <button onClick={handleDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
