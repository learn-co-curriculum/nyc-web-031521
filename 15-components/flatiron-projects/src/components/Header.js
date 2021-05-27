/*
JSX Rules
- When you want to write JavaScript in your JSX, you must use {}
- Within the curlies, you can write ANY valid JS expression
*/

function Header({ title, logo }) {
  return (
    <header>
      <h1>
        {logo} {title}
      </h1>
      <button>Dark Mode</button>
    </header>
  );
}

export default Header;
