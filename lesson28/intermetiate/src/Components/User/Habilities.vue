// Slots

<template>
  <div class="user_profile">
    <h3>User profile:</h3>
    <div>
      <slot name="other">
        <h3>Loading...</h3>
      </slot>
      <slot name="main_habilities"></slot>
      <slot name="notes"></slot>
      <hr>
      <!-- Default slot value -->
      <slot></slot>
    </div>
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