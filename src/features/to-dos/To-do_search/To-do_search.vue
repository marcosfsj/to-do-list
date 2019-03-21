<template src="./To-do_search.html"></template>
<style src="./To-do_search.css"></style>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      totalRows: this.$store.getters.totalTodos,
      fields: [
        {
          key: "id",
          label: "Id"
        },
        {
          key: "description",
          label: "What needs to be done",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "date",
          label: "by date",
          sortable: true,
          class: "text-center"
        },
        { key: "done", label: "is Done" },
        { key: "actions", label: "Actions" }
      ],
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      modalInfo: { title: "", content: "" }
    };
  },
  computed: {
    ...mapGetters(["todoList"]),
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  methods: {
    info(todo, index, button) {
      this.modalInfo.title = `Row index: ${index}`;
      this.modalInfo.content = JSON.stringify(todo, null, 2);
      this.$root.$emit("bv::show::modal", "modalInfo", button);
    },
    resetModal() {
      this.modalInfo.title = "";
      this.modalInfo.content = "";
    },
    onFiltered(filteredTodos) {
      this.totalRows = filteredTodos.length;
      this.currentPage = 1;
    },
    add() {
      this.$store.dispatch("addTodo", {
        id: "3",
        description: "To buy print documents.",
        date: "07/15/2019",
        done: false
      });
      this.updateTotalRow();
    },
    deleteTodo(todo) {
      this.$store.dispatch("deleteTodo", todo);
      this.updateTotalRow();
    },
    updateTotalRow() {
      this.totalRows = this.$store.getters.totalTodos;
    },
    switchDone(todo) {
      this.$store.dispatch("switchDone", todo);
    },
    edit(todo) {
      this.$router.push({ path: "edit/" + todo.id });
    },
    navigateToAdd() {
      this.$router.push({ path: "add" });
    }
  }
};
</script>




