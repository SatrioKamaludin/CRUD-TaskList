const initialState = {
    todos: [
        {
            id: 1,
            title: "reading a book",
        },
        {
            id: 2,
            title: "workout",
        },
    ],
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TASK":
        const newTask = {
          id: state.todos.length + 1,
          title: action.payload,
        };
        return {
          ...state,
          todos: [...state.todos, newTask],
        };
      case "DELETE_TASK":
        const deleteTodos = state.todos.filter(
          (task) => task.id !== action.payload
        );
        return {
          ...state,
          todos: deleteTodos,
        };
      case "UPDATE_TASK":
        const updatedTodos = state.todos.map((task) =>
          task.id === action.payload.id
            ? { ...task, title: action.payload.title }
            : task
        );
        return {
          ...state,
          todos: updatedTodos,
        };
      default:
        return state
    }
  };
  
  export default todosReducer