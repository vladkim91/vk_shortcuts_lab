<template>
  <div>
    <h3>Mechanical Keyboards</h3>
    <div class="kb-container">
      <Keyboard v-for="keyboard in keyboards" :key="keyboard.id" :keyboard="keyboard" @selectKeyboard="selectKeyboard"/>
    </div>
  </div>
</template>

<script>
import Keyboard from '../components/Keyboard.vue'
import keyboardsData from '../keyboards'
export default {
  name: 'Home',
  components: {Keyboard},
  data: () => ({
    keyboards: keyboardsData
  }),

   methods: {
     selectKeyboard(keyboard_id) {
       this.$router.push(`/keyboards/${keyboard_id}`)
     }
   }
}
</script>

<style scoped>
h3 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 2em;
  text-align: center;
}
.kb-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

}

</style>