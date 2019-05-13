<template>
  <div>
    <app-header></app-header>
    <div>Hello {{name}}</div>
    <div>Hello to all</div>
    <componentFooter></componentFooter>

  </div>
</template>

<script>
// Local usage of conponent
import componentFooter from './Components/Header_footer/Footer'
export default {
  data(){
    return {
      name: 'Sara'
    }
  },
  // Register components
  components: {
    // "app-footer": Footer
    componentFooter
    
  }
}
</script>

<styles>
</styles>