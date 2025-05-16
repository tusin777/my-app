//  https://transform.tools/html-to-jsx

import { Email } from "../Email";
import MyName from "../MyName/MyName";
import "./App.css";

function App() {
  const name = "Вася";
  const element = <h1>Леха и {name} - друзья</h1>;
  const condition = true;

  const response = "<div> alert('Вы взломаны') </div>";

  return (
    <>
      <h1>Привет React!</h1>
      <p>Это мой первый React-проект с Vite.</p>
      <p>{name}</p>
      {element}
      {response}
      {condition && <span>{3 + 8}</span>}
      {condition && <MyName />}
      <div dangerouslySetInnerHTML={{ __html: response }}></div>
      <Email />
      <input type="text" />
      <input type="checkbox" checked={false} />
      <img src="" alt="" />
      <br />
      <label htmlFor="eamil"></label>
      <button disabled>Просто кнопка</button>
    </>
  );
}

export default App;
