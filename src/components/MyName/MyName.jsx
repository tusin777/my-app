import "./MyName.css";

const MyName = () => {
  const cats = ["Лев", "Тигр", "Пума"];

  const style = { color: "blue", fontSize: 32, backgroundColor: "green" };

  return (
    <ul style={style}>
      {cats.map((e) => (
        <li key={e}>{e}</li>
      ))}
    </ul>
  );
};

export default MyName;
