export const addTodo = (state, payload) => {
  // This code has to be syschronous
  state.todos.push(payload);
};

export const deleteTodo = (state, payload) => {
  // This code has to be syschronous
  let index = state.todos.findIndex(todo => todo.id == payload.id);
  state.todos.splice(index, 1);
};

export const switchDone = (state, payload) => {
  // This code has to be syschronous
  let index = state.todos.findIndex(todo => todo.id == payload.id);
  state.todos[index].done = !state.todos[index].done;
};
