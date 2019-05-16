// Slots

<template>
  <div class="user_profile">
    <h3>User profile:</h3>
    <slot></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      habilities: ["HTML", "CSS", "JS"]
    };
  }
};
</script>


<style scoped>
.user_profile {
  border: 1px solid #2196f3;
}
li {
  color: green;
}
</style>