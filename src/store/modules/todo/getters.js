export const todoList = state => {
  return state.todos;
};

export const totalTodos = state => {
  return state.todos.length;
};

export const getTodoById = (state, payload) => {
  return state.todos.filter(todo => todo.id === payload);
};
