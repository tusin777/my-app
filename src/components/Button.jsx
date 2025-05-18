// const Button = (props) => {
//   // props.onClick = "reactions"; // так делать нельзя
//   const reaction = props.onClick;
//   return (
//     <button onClick={props.onClick} style={props.btnStyle}>
//       {props.lable || "просто кнопка"}
//     </button>
//   );
// };

// export default Button;

const Button = ({ lable = "просто кнопка", onClick, btnStyle }) => {
  return (
    <button onClick={onClick} style={btnStyle}>
      {lable}
    </button>
  );
};

export default Button;
