<template>
  <div class="home">
    <h1>Can I Haz Dad Joke</h1>
    <h2>{{ joke }}</h2>
    <div class="btn-container">
      <a href="#History" class="btn" @click="addJoke">Add Joke</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapActions(["getRandomJoke"]),
    addJoke() {
      //this.$store.dispatch("getRandomJoke");
      this.getRandomJoke();
    },
  },
  computed: {
    ...mapGetters(["getCurrentJoke"]),
    joke() {
      //return this.$store.getters.getCurrentJoke;
      return this.getCurrentJoke;
    },
  },
};
</script>

<style lang="scss">
$white: hsl(0, 0%, 93%);
$black: hsl(0, 0%, 20%);
$yellow: hsl(60, 100%, 50%);
$purple: hsl(269, 100%, 55%);
$colorPrimary: $yellow;
$colorSecondary: $purple;
$titlestick: hsl(210, 29%, 24%);
h1 {
  color: $titlestick;
  font-weight: bold;
}
h2 {
  font-weight: 200;
  color: $titlestick;
}
.btn-container {
  margin: 3rem;
}
@mixin btn__split($colorLeft, $colorRight, $textColor) {
  .btn {
    position: relative;
    letter-spacing: 0.25em;
    margin: 0 auto;
    padding: 1rem 2.5rem;
    background: transparent;
    outline: none;
    font-size: 28px;
    color: $textColor;

    &::after,
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 50%;
      transform: skewX(30deg);
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      z-index: -2;
    }
    &::before {
      background-color: $colorLeft;
      top: -1rem;
      left: 0rem;
    }
    &::after {
      background-color: $colorRight;
      top: 1rem;
      left: 8rem;
    }
    &:hover {
      &::before,
      &::after {
        top: 0;
        transform: skewx(0deg);
      }
      &::after {
        left: 0rem;
      }
      &::before {
        left: 8.75rem;
      }
    }
  }
}

a {
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
}

@include btn__split($colorPrimary, $colorSecondary, $black);
</style>
