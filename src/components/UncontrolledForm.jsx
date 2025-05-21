import { useRef } from "react";

const UncontrolledForm = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Имя: " + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" ref={inputRef} />
        <button type="submit">Отправить</button>
      </label>
    </form>
  );
};

export default UncontrolledForm;
