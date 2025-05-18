import Button from "../components/Button";
import "./HomePage.css";

const HomePage = ({ click }) => {
  const handleClick = () => {
    alert("Меня нажали");
  };

  const showMessage = () => {
    alert("Это другое сообщение");
  };
  return (
    <div className="home-page">
      <h2>Домашння страница</h2>
      <p>Добро пожаловать на нащ сайт!</p>
      <Button
        lable="Нажми меня"
        onClick={() => {
          click();
        }}
      />
      <Button lable="Какое-то сообщение" onClick={showMessage} />
    </div>
  );
};

export default HomePage;
