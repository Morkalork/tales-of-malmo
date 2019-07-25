<template>
  <div class="player-select-list">
    <h3>Välj spelartrupp</h3>
    <p>
      Välj här två spelare som ska utgöra startskottet för din spelartrupp. Du
      kan klicka på deras profilbilder för att se mer information.
    </p>
    <player-select
      v-for="player in players"
      :player="player"
      :key="player.name"
    />
  </div>
</template>

<script>
import PlayerSelect from "./PlayerSelect";
export default {
  name: "PlayerSelectList",
  components: { PlayerSelect },
  props: {
    players: Array
  }
};
</script>

<style lang="scss" scoped>
.player-select-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
