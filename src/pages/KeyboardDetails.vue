<template>
  <div class="kb-details">
    <h1>{{currentKb.label}}</h1>
    <img :src="currentKb.image" alt="">
    <p>{{currentKb.description}}</p>
    <h2>${{currentKb.price}}</h2>

  </div>
</template>

<script>
import keyboardsData from '../keyboards'
export default {
  
  name: "KeyboardDetails",
  data : ()  => ({
    currentKb: null,
    keyboards: keyboardsData
  }),
  mounted() {
    this.getKbDeatails()
  },

  methods: {
    getKbDeatails() {
      const kbId = parseInt(this.$route.params.keyboard_id)
      const filteredKb = this.keyboards.filter((e) => {

        return e.id === kbId 
      })
      this.currentKb = filteredKb[0]
  
    }
  }
}
</script>

<style scoped>
 .kb-details {
   width: 50vw;
  flex-direction: column;
  margin: 0 auto;
  border: .3rem black solid;
  box-shadow: 2px 3px 15px;
  padding: 2rem;
background: linear-gradient(#000000, #171b3f);

  
 }

img {
  margin: 0 2rem ;

}
</style>
