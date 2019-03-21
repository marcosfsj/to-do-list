export const addTodo = (context, payload) => {
  // This code can be asyschronous
  payload.id = 8;
  context.commit("addTodo", payload);
};

export const deleteTodo = (context, payload) => {
  // This code can be asyschronous
  context.commit("deleteTodo", payload);
};

export const switchDone = (context, payload) => {
  // This code can be asyschronous
  context.commit("switchDone", payload);
};
