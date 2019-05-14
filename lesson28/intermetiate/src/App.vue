<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <compUserProfile
        :userName="name"
        :userLastName="lastName"
        :userAge="age"
        :userParents="parents"
      />
    </div>
    <compFooter/>
  </div>
</template>

<script>
import compFooter from "./Components/Header_footer/Footer.vue";
import compUserProfile from "./Components/User/UserProfile.vue";

export default {
  data() {
    return {
      name: "Sara",
      lastName: "Smith",
      age: 25,
      parents: {
        mother: "Marta",
        father: "Jack"
      }
    };
  },
  components: {
    compFooter,
    compUserProfile
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}
.container {
  min-height: 84vh;
  box-sizing: border-box;
  padding: 20px;
}
</style>


// // Local usage of conponent
// import componentFooter from './Components/Header_footer/Footer'
// export default {
//   data(){
//     return {
//       name: 'Sara'
//     }
//   },
//   // Register components
//   components: {
//     // "app-footer": Footer
//     // ES6 way
//     componentFooter
    
//   }
// }
