// import { v4 as uuid4 } from "uuid";

import UserList from "../components/UserList";
import "./HomePage.css";

function HomePage() {
  // const numbers = [1, 2, 3, 4, 5, 6, 7];
  // const listItem = numbers.map((num) => <li key={uuid4()}>{num}</li>);
  // return <ul>{listItem}</ul>;
  // const users = [
  //   { id: 1, name: "Alice" },
  //   { id: 2, name: "Bob" },
  //   { id: 3, name: "Charlie" },
  // ];
  // const userList = users.map((user) => <li key={user.id}>{user.name}</li>);
  // return <ul>{userList}</ul>;
  return <UserList />;
}

export default HomePage;
