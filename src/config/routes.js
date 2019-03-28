import Landing from "../components/layout/Landing.vue";

// This is for lazy load with webpack
const TodoSearch = resolve => {
  require.ensure(
    ["../features/to-dos/To-do-search/To-do-search.vue"],
    () => {
      resolve(require("../features/to-dos/To-do-search/To-do-search.vue"));
    },
    "to-do"
  );
};

const TodoEdit = resolve => {
  require.ensure(
    ["../features/to-dos/To-do-edit/To-do-edit.vue"],
    () => {
      resolve(require("../features/to-dos/To-do-edit/To-do-edit.vue"));
    },
    "to-do"
  );
};

export const routes = [
  { path: "", component: Landing },
  { path: "/to-dos/search", component: TodoSearch },
  { path: "/to-dos/add", component: TodoEdit },
  { path: "/to-dos/edit/:id?", component: TodoEdit, props: true },
  { path: "*", redirect: "/" }
];
