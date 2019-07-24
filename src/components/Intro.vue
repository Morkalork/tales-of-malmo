<template>
  <game-segment :buttons="buttons">
    <MainHeader />
  </game-segment>
</template>

<script>
import MainHeader from "./MainHeader";
import GameSegment from "./GameSegment";
export default {
  name: "Intro",
  components: { GameSegment, MainHeader },
  data() {
    return {
      buttons: [
        {
          title: "Starta",
          route: "init"
        },
        {
          title: "Se tabellen",
          route: "score"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
