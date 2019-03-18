<template src="./To-do_edit.html"></template>
<style src="./To-do_edit.css"></style>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "0"
    },
    mode: {
      type: String,
      default: "edit"
    }
  },
  methods: {
    isEditMode() {
      return mode == "edit";
    }
  }
};
</script>



