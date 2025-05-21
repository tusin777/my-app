import Greeting from "../components/Greeting";
import Notification from "../components/Notification";
import TodoList from "../components/TodoList";
import WelcomeMessage from "../components/WelcomeMessage";
import "./HomePage.css";

function HomePage() {
  // const messages = ["сообщения 1", "сообщение 2", "we"];
  // const [value, setValue] = useState("");

  // const todos = [
  //   { id: 1, text: "изучить реакт", completed: true },
  //   { id: 2, text: "создать проект", completed: false },
  //   { id: 3, text: "написать компоненты", completed: false },
  //   { id: 4, text: "добавить стили", completed: true },
  //   { id: 5, text: "реализовать роутинг", completed: false },
  //   { id: 6, text: "подключить API", completed: true },
  //   { id: 7, text: "обработать ошибки", completed: false },
  //   { id: 8, text: "настроить сборку", completed: true },
  //   { id: 9, text: "оптимизировать производительность", completed: false },
  //   { id: 10, text: "написать тесты", completed: false },
  //   { id: 11, text: "задеплоить приложение", completed: true },
  //   { id: 12, text: "обновить документацию", completed: false },
  // ];

  const isLoggedIn = false;

  return (
    <>
      {/* <Greeting isLoggedIn={false} />
      <Greeting isLoggedIn={true} />
      <Notification messages={messages} />
      <Notification messages={[]} /> */}
      {/* <TodoList todos={todos} /> */}
      <WelcomeMessage isLoggedIn={isLoggedIn} />
    </>
  );
}

export default HomePage;
