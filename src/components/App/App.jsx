import Email from "../Email";
import MyName from "../MyName/MyName";
import "./App.css";

function App() {
  const name = `Вася Пупкин`;

  const element = <h1>Алексей и {name} - друзья</h1>;

  const response = "<div>alert('Вы взломаны!')</div>";

  return (
    <>
      <h1>Привет, React!</h1>
      <p>Это мой первый React-проект с Vite</p>
      <MyName />
      {element}
      <div dangerouslySetInnerHTML={{ __html: response }}></div>
      <span>{3 + 8}</span>
      <Email />
      <input type="checkbox" />
      <img src="" alt="" />
      <br />
      <br />
      <label htmlFor="email"></label>
      <input type="checkbox" checked={false} />
      <button disabled>Просто кнопка</button>
    </>
  );
}

export default App;
