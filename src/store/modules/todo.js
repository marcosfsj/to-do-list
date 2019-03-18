const state = {
  todos: [
    { id: "1", description: "To buy paper.", date: "07/15/2019", done: false },
    { id: "2", description: "To buy ink.", date: "07/15/2019", done: false },
    {
      id: "3",
      description: "To buy print documents.",
      date: "07/15/2019",
      done: false
    },
    {
      id: "4",
      description: "To buy print documents.",
      date: "07/15/2019",
      done: false
    },
    {
      id: "5",
      description: "To buy print documents.",
      date: "07/15/2019",
      done: false
    },
    {
      id: "6",
      description: "To buy print documents.",
      date: "07/15/2019",
      done: false
    },
    {
      id: "7",
      description: "To buy print documents.",
      date: "07/15/2019",
      done: false
    }
  ]
};

const getters = {
  todoList: state => {
    return state.todos;
  },
  totalTodos: state => {
    return state.todos.length;
  }
};

const mutations = {
  addTodo: (state, payload) => {
    // This code has to be syschronous
    state.todos.push(payload);
  },
  deleteTodo: (state, payload) => {
    // This code has to be syschronous
    let index = state.todos.findIndex(todo => todo.id == payload.id);
    state.todos.splice(index, 1);
  },
  switchDone: (state, payload) => {
    // This code has to be syschronous
    let index = state.todos.findIndex(todo => todo.id == payload.id);
    state.todos[index].done = !state.todos[index].done;
  }
};

const actions = {
  addTodo: (context, payload) => {
    // This code can be asyschronous
    context.commit("addTodo", payload);
  },
  deleteTodo: (context, payload) => {
    // This code can be asyschronous
    context.commit("deleteTodo", payload);
  },
  switchDone: (context, payload) => {
    // This code can be asyschronous
    context.commit("switchDone", payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
