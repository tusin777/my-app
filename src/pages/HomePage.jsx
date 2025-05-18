import Button from "../components/Button";
import UserList from "../components/UserList";
import "./HomePage.css";
import programer from "../assets/programmer.jpg";

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Домашння страница</h2>
      <p>Добро пожаловать на нащ сайт!</p>
      <Button />
      <UserList />
      <img src={programer} alt="programer" />
      <img src="./images/laptop.jpg" alt="laptop" />
    </div>
  );
};

export default HomePage;
