import { useState } from "react";

function Input({ onAdd }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && date) {
      onAdd({ task, date });
      setTask("");
      setDate("");
    }
  };

  return (
    <form className="d-flex gap-2 my-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="date"
        className="form-control"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}

export default Input;
