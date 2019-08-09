<template>
  <div id="app">
    <top-menu />
    <router-view />
    <notification
      v-if="notification.title !== ''"
      :title="notification.title"
      :message="notification.message"
      :notification-type="notification.notificationType"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Notification from "./components/Notification";
import TopMenu from "./components/TopMenu";

export default {
  name: "App",
  components: { TopMenu, Notification },
  created() {
    this.loadBonuses();
    this.loadStory();
    this.loadEnemies();
    this.loadAssociations();
    this.loadFightActions();
  },
  methods: {
    ...mapActions([
      "loadBonuses",
      "loadStory",
      "loadEnemies",
      "loadAssociations",
      "loadFightActions"
    ])
  },
  computed: {
    ...mapState({
      notification: state => state.notification
    })
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
  background-color: $blue;
}

a {
  text-decoration: none;
}

#app {
  font-family: "Neucha", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  max-width: 1024px;
  margin: 0 auto;
  position: relative;
}
</style>
