<template src="./Test.html"></template>
<style src="./Test.css"></style>

<script>
export default {
  data() {
    return {
      text: "from super component"
    };
  },
  methods: {
    methodA() {
      console.log(text);
    },
    methodB() {
      console.log("from here");
    }
  }
};
</script>




