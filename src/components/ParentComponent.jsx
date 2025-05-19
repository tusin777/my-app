import { Component } from "react";
import ChildComponent from "./ChildComponent";

export class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [0, 0, 0],
    };
  }

  increment = (i) => {
    this.setState((prevState) => {
      const newCount = [...prevState.count];
      newCount[i] += 1;
      return { count: newCount };
    });
  };

  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        {this.state.count.map((count, index) => (
          <ChildComponent
            key={index}
            count={count}
            onIncrement={() => this.increment(index)}
          />
        ))}
      </div>
    );
  }
}

export default ParentComponent;
