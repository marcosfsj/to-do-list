<template src="./To-do_edit.html"></template>
<style src="./To-do_edit.css"></style>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      form: {
        id: 0,
        description: "",
        date: "",
        done: false
      },
      show: true
    };
  },
  props: {
    id: 0
  },
  mounted() {
    if (this.id) {
      console.log(this.getTodoById("1"));
    }
  },
  methods: {
    ...mapGetters(["getTodoById"]),
    onSubmit(event) {
      event.preventDefault();
      if (this.id) {
        this.$store.dispatch("updateTodo", this.form).then(() => {
          this.$router.push({ path: "/to-dos/search" });
        });
      } else {
        this.$store.dispatch("addTodo", this.form).then(() => {
          this.$router.push({ path: "/to-dos/search" });
        });
      }
    },
    onReset(event) {
      event.preventDefault();
      /* Reset our form values */
      this.form.description = "";
      this.form.date = "";
      this.form.done = false;
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>



