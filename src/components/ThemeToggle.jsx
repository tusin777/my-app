const ThemeToggle = ({ isDarkMode, setIsDarkMoge }) => {
  const toggleTheme = () => {
    setIsDarkMoge(!isDarkMode);
  };
  return (
    <div
      style={{
        background: isDarkMode ? "black" : "green",
        color: isDarkMode ? "white" : "black",
        height: 200,
      }}
    >
      <button onClick={toggleTheme}>Переключить цвет</button>
    </div>
  );
};

export default ThemeToggle;
