import { useState } from "react";

const ControlledForm = () => {
  const [value, setValue] = useState("");

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Имя: " + value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Отправить</button>
      </label>
    </form>
  );
};

export default ControlledForm;
