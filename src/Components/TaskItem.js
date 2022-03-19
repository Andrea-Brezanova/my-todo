

export default function TaskItem(props) {
    return (
      <div>
        <p>{props.todo.title}</p>
        <button
          onClick={() => {
            props.setTodos((state) => {
              return state.filter((todo) => {
                return todo.id !== props.todo.id;
              });
            });
          }}
        >
          {" "}
          Delete{" "}
        </button>
      </div>
    );
  }
  