import { Component } from "react";

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Вася",
      age: 22,
    };
  }

  updateName = () => {
    this.setState({ name: "Маша" });
  };

  updateAge = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <div>
        <p>Имя: {this.state.name}</p>
        <p>Возраст: {this.state.age}</p>
        <button onClick={this.updateName}>Изменить имя</button>
        <button onClick={this.updateAge}>Изменить возраст</button>
      </div>
    );
  }
}

export default UserProfile;
