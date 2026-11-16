function Header({ darkMode, setDarkMode }) {
  return (
    <header>
      <h1>Poradnik buildów do Cyberpunk 2077</h1>
      <button type="button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Jasny motyw" : "Ciemny motyw"}
      </button>
    </header>
  );
}

export default Header;
