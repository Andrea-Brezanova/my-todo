import TaskItem from "../Components/TaskItem.js";

export default function Task(props) {
    console.log(props);
  return (
    <div>
      {props.todos.map((todo) => {
        return (
          <TaskItem todo={todo} key={props.id} setTodos={props.setTodos} />
        );
      })}
    </div>
  );
}
