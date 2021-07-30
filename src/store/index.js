import { createStore } from "vuex";
const url = "https://icanhazdadjoke.com";
const headers = { Accept: "application/json" };
export default createStore({
  state: {
    currentJoke: "This is a joke",
    allJokes: [],
  },
  mutations: {
    setCurrentJoke(state, payload) {
      state.currentJoke = payload;
      state.allJokes.push(payload);
    },
  },
  actions: {
    async getRandomJoke(state) {
      const joke = await fetch(url, { headers });
      const data = await joke.json();
      state.commit("setCurrentJoke", data.joke);
    },
  },
  modules: {},
  getters: {
    getCurrentJoke: (state) => state.currentJoke,
    getAllJoke: (state) => state.allJokes,
  },
});
