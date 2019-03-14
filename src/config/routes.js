import Landing from "../components/layout/Landing.vue";

// This is for lazy load with webpack
const TodoSearch = resolve => {
  require.ensure(
    ["../features/to-dos/To-do_search/To-do_search.vue"],
    () => {
      resolve(require("../features/to-dos/To-do_search/To-do_search.vue"));
    },
    "to-do"
  );
};

const TodoEdit = resolve => {
  require.ensure(
    ["../features/to-dos/To-do_edit/To-do_edit.vue"],
    () => {
      resolve(require("../features/to-dos/To-do_edit/To-do_edit.vue"));
    },
    "to-do"
  );
};

export const routes = [
  { path: "", component: Landing },
  { path: "/to-dos/search", component: TodoSearch },
  { path: "/to-dos/edit/:id", component: TodoEdit, props: true },
  { path: "*", redirect: "/" }
];
