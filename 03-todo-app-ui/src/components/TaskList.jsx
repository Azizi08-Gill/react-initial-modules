function TaskList({ tasks, onDelete }) {
  return (
    <div className="mt-4">
      {tasks.map((item, index) => (
        <div
          key={index}
          className="d-flex justify-content-between align-items-center border p-2 my-2 rounded"
        >
          <div className="d-flex flex-grow-1 gap-3">
            <div style={{ width: "50%" }}>{item.task}</div>
            <div style={{ width: "30%" }}>{item.date}</div>
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
