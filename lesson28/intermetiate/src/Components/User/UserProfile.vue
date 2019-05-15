<template>
  <div>
    <div class="user_profile">
      <ul>
        <li>
          <span>Name:</span>
          {{userName}}
        </li>
        <li>
          <span>Last name:</span>
          {{userLastName}}
        </li>
        <li>
          <span>Age:</span>
          {{userAge}}
        </li>
      </ul>
      <h3>Parents</h3>
      <ul>
        <!-- <li>Mother: {{userParents.mother}}</li> -->
        <!-- <li>Mother: {{userParents.father}}</li> -->
        <li v-for="(key, value, index) in userParents" :key="index">
          <span>{{value}}</span>
          :
          {{key}}
        </li>
      </ul>
      <button @click="updateName">Update name</button>
      <button @click="update=LastName('Jordan')">Update Last Name</button>
      <div>
        <input type="text" v-model="friendInput">
        <button @click="addFriend">Add friend</button>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../../main.js";

export default {
  data() {
    return { friendInput: "" };
  },
  // Props as array
  // props: ["userName", "userLastName"],
  // Props as objects
  props: {
    userName: String,
    userLastName: String,
    userAge: Number,
    userParents: Object,
    updateLastName: Function
  },
  methods: {
    updateName() {
      // Emit event to update parent prop
      this.$emit("userName", "Frank Sinatra");
      // return (this.userName = "Bob");
    },
    addFriend() {
      bus.$emit("addFriend", this.friendInput);
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