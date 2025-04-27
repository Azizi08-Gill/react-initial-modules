import { useState } from "react";
import Heading from "./Heading";
import Input from "./Input";
import TaskList from "./TaskList";

function Todo() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Heading />
      <Input onAdd={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default Todo;
