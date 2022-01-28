<template>
  <div class="name">
    <h1 @click="goHome">Home</h1>
 
  </div>
</template>

<script>
  export default {
    methods: {
      goHome() {
        this.$router.push('/')
      }
    } 
  }
</script>
