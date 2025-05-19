// import { Component } from "react";

// export class ChildComponent extends Component {
//   render() {
//     const { count, onIncrement } = this.props;
//     return (
//       <div>
//         <p>Счетчик: {count}</p>
//         <button onClick={onIncrement}>Прибавить</button>
//       </div>
//     );
//   }
// }

// export default ChildComponent;

import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <p>Счетчик: {props.count}</p>
      <button onClick={props.onIncrement}>Прибавить</button>
    </div>
  );
};

export default ChildComponent;
