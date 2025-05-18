import Button from "../components/Button";
import UserList from "../components/UserList";
import "./HomePage.css";
import TestComponent from "../components/TestComponent";
import TaskList from "../components/TaskList";

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Домашння страница</h2>
      <p>Добро пожаловать на нащ сайт!</p>
      <Button />
      <UserList />
      <TestComponent />
      <TaskList />
    </div>
  );
};

export default HomePage;
