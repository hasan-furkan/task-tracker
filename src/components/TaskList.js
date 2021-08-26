import Task from "./TaskItem";

export default function TaskList({tasks, onDelete, toggleDone}) {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} toggleDone={toggleDone} />
      ))}
    </div>
  );
}