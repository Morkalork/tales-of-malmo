<template>
  <div class="player-select-list">
    <h3>Välj spelartrupp</h3>
    <p>
      Välj här två spelare som ska utgöra startskottet för din spelartrupp. Du
      kan klicka på deras profilbilder för att se mer information.
    </p>
    <player-select
      v-for="(player, index) in players"
      :player="player"
      :key="player.name"
      :is-selected="selectedIndexes.includes(index)"
      @onTogglePlayer="togglePlayer(index)"
    />
  </div>
</template>

<script>
import PlayerSelect from "./PlayerSelect";
export default {
  name: "PlayerSelectList",
  components: { PlayerSelect },
  data() {
    return {
      selectedIndexes: [0, 1]
    };
  },
  props: {
    players: Array
  },
  methods: {
    togglePlayer: function(index) {
      let newSelectedIndexes = [];
      if (this.selectedIndexes.includes(index)) {
        newSelectedIndexes = this.selectedIndexes.filter(i => i !== index);
      } else {
        newSelectedIndexes = [...this.selectedIndexes, index];
      }

      if (
        newSelectedIndexes.length !== 2 &&
        this.selectedIndexes.length === 2
      ) {
        this.$emit("onError");
      } else if (
        newSelectedIndexes.length === 2 &&
        this.selectedIndexes.length !== 2
      ) {
        this.$emit("onErrorSolved");
      }
      this.selectedIndexes = newSelectedIndexes;
    }
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
