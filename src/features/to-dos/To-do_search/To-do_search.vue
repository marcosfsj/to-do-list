<template src="./To-do_search.html"></template>
<style src="./To-do_search.css"></style>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["listTodos"])
  },
  methods: {
    // ...mapActions(["increment", "decrement", "incrementSomething"])
  }
};
</script>




