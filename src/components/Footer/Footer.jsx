import "./Footer.css";

export default function Footer({ isDarkMode, setText, text }) {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <footer
      className="footer"
      style={{
        background: isDarkMode ? "red" : "blue",
        color: isDarkMode ? "white" : "black",
        height: 200,
      }}
    >
      <p>Подвал сайта</p>
      <input type="text" value={text} onChange={handleChange} />
    </footer>
  );
}
