<template>
  <div class="container">
    <div class="user_profile">
      <ul>
        <li>
          <span>Name:</span>
          {{name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name"]
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