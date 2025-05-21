// const Greeting = ({ isLoggedIn }) => {
//   if (isLoggedIn) {
//     return <h1>Добро пожаловать!</h1>;
//   } else {
//     return <h1>Пожалуйста войдите в систему!</h1>;
//   }
// };

// export default Greeting;

const Greeting = ({ isLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? (
        <h1>Добро пожаловать!</h1>
      ) : (
        <h1>Пожалуйста войдите в систему!</h1>
      )}
    </>
  );
};

export default Greeting;
