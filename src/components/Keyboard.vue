<template>
  <div class="kb-c-c" @click="selectKeyboard">
    <h3>{{ keyboard.label }}</h3>
    <img :src="keyboard.image" />
    <h4>${{ keyboard.price }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Keyboard',
  props: ['keyboard'],

  methods: {
    selectKeyboard(e) {
      e.preventDefault();

      this.$emit('selectKeyboard', this.keyboard.id);
    }
  }
};
</script>

<style scoped>
.kb-c-c {
  display: flex;
  flex-direction: column;
  width: 12rem;
  text-align: center;
  padding: 1rem;
  background: black;
  margin: 0.3rem;
  transition: transform 0.2s;
}
.kb-c-c:hover {
  cursor: pointer;
  opacity: 0.8;
  transform: scale(1.02);
}
</style>