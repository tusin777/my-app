import UserList from "../components/UserList";
import Button from "../components/Button";
import "./HomePage.css";
import programmer from "../assets/programmer.jpg";

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать на наш сайт!</p>
      <Button />
      <UserList />
      <img src={programmer} alt="Программист" />
      <img src="images/laptop.jpg" alt="Ноутбук" />
    </div>
  );
};

export default HomePage;
