<template>
  <div>
    <app-header></app-header>
    <div class="container">
      {{name}}
      // Emit event to uptade patent prop
      <compUserProfile
        :userName="name"
        :userLastName="lastName"
        :userAge="age"
        :userParents="parents"
        :updateLastName="updateLastName"
        @userName="name = $event"
      />
      <compFriends/>

      <compHabilities>
        <ul slot="main_habilities">
          <li v-for="(hab, index) in habilities" :key="index">{{ hab}}</li>
        </ul>
        <div slot="notes">
          <p>The user also knows PHP</p>
        </div>
        <hr>
        <div :slot="slotName">Dynamic content</div>
        <hr>
        <div>
          <a href="#">See more about</a>
        </div>
      </compHabilities>
    </div>
    <compFooter/>
  </div>
</template>

<script>
import compFooter from "./Components/Header_footer/Footer.vue";
import compUserProfile from "./Components/User/UserProfile.vue";
import compFriends from "./Components/User/Friends.vue";
import compHabilities from "./Components/User/Habilities";

export default {
  data() {
    return {
      name: "Sara",
      lastName: "Smith",
      age: 25,
      parents: {
        mother: "Marta",
        father: "Jack"
      },
      habilities: ["HTML", "CSS", "JS"],
      slotName: ""
    };
  },
  methods: {
    updateLastName(value) {
      return (this.lastName = value);
    }
  },

  // Registering components
  components: {
    compFooter,
    compUserProfile,
    compFriends,
    compHabilities
  },
  created() {
    setTimeout(() => {
      this.slotName = "other";
    }, 2000);
  }
};
</script>

<style scoped>
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
