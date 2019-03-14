const state = {
  todos: [
    { description: "To buy paper.", date: "07/15/2019", done: false },
    { description: "To buy ink.", date: "07/15/2019", done: false },
    { description: "To buy print documents.", date: "07/15/2019", done: false }
  ]
};

const getters = {
  listTodos: state => {
    return state.todos;
  }
};

const mutations = {
  // increment: (state, payload) => {
  //   // This code has to be syschronous
  //   state.counter += payload.by;
  // }
};

const actions = {
  // increment: (context, payload) => {
  //   // This code can be asyschronous
  //   context.commit("increment", payload);
  // }
};

export default {
  state,
  getters,
  mutations,
  actions
};
