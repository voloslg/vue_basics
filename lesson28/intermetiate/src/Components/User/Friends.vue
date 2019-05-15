<template>
  <div class="user_friends">
    <h2>User friends:</h2>
    <ul>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: ["Sara", "Bob", "Mikre"]
    };
  }
};
</script>


<style >
.user_friends {
  border: 1px solid #2196f3;
}
</style>