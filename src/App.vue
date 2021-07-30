<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home 👨🏼‍🚀</router-link>
    <router-link :to="{ name: 'Jokes' }">All Jokes 💂🏼‍♂️</router-link>
  </div>
  <router-view />
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getRandomJoke"]),
  },
  mounted() {
    this.getRandomJoke();
  },
};
</script>
<style lang="scss">
$title-stick: hsl(210, 29%, 24%);
$title-stick-active: hsl(210, 43%, 39%);
#app {
  margin: 0 auto;
  width: 130vh;
  height: 70vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $title-stick;
  border-radius: 18px;
  box-shadow: 17px 17px 20px #a6a6a6, -17px -17px 20px #ffffff;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $title-stick;
    font-size: 1.3rem;
    text-decoration: none;
    margin: 8rem;

    &.router-link-exact-active {
      color: $title-stick-active;
      text-decoration: none;
    }
  }
}
</style>
