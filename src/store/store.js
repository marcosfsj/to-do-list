import Vue from "vue";
import Vuex from "vuex";

// Generic state
// import state from "./state";
// import * as getters from "./getters";
// import * as mutations from "./mutations";
// import * as actions from "./actions";

// Modules
import Todo from "./modules/todo";

Vue.use(Vuex);

export const store = new Vuex.Store({
  // state,
  // getters,
  // mutations,
  // actions,
  modules: { Todo }
});
