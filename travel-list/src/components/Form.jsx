import { useState } from "react";

function Form({ setItems }) {
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity: count,
      packed: false,
      id: Date.now(),
    };
    console.log(setItems);
    setItems((items) => [...items, newItem]);
    setDescription("");
  };
  const [count, setCount] = useState(1);
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Что тебе надо для поездки друже?</h3>
      <select value={count} onChange={(e) => setCount(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>add</button>
    </form>
  );
}
export default Form;
