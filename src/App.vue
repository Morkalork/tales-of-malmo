<template>
  <div id="app">
    <intro />
  </div>
</template>

<script>
import Intro from "./components/Intro";

export default {
  name: "app",
  components: {
    Intro
  }
};
</script>

<style lang="scss">
@import "./scss/variables";
@import url("https://fonts.googleapis.com/css?family=Neucha&display=swap");

* {
  margin: 0;
  padding: 0;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: "Neucha", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $blue;
  min-height: 100%;
  max-width: 1024px;
  box-shadow: 0 0 1rem $blue-3;
  margin: 0 auto;
}
</style>
