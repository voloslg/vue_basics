<template>
  <div class="container">
    <div class="user_profile">
      <ul>
        <li>
          <span>Name:</span>
          {{name}}
        </li>
        <li>
          <span>Last name:</span>
          {{lastName}}
        </li>
      </ul>
      <button @click="updateName">Update name</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "lastName"],
  methods: {
    updateName() {
      return (this.name = "Bob");
    }
  }
};
</script>

<style>
span {
  font-weight: 800;
}
.user_profile {
  border: 1px solid #2196f3;
}
</style>