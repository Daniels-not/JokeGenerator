<template>
  <div class="jokes">
    <h1>This is all jokes you've retrieved 🧙🏼‍♂️</h1>
    <h2 v-for="(joke, index) in jokes" :key="index">
      <span>{{ index }}</span>
      {{ joke }}
    </h2>
  </div>
</template>

<script>
export default {
  computed: {
    jokes() {
      return this.$store.getters.getAllJoke;
    },
  },
};
</script>
