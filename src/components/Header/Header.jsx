import "./Header.scss";

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar__title">Todos</div>
      <div className="navbar__search">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
    </nav>
  );
}

export default Header;
