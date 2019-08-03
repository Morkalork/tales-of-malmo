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
      :is-selected="selectedIds.includes(player.id)"
      @onTogglePlayer="togglePlayer(player)"
    />
  </div>
</template>

<script>
import PlayerSelect from "./PlayerSelect";
import { mapActions, mapState } from "vuex";
export default {
  name: "PlayerSelectList",
  components: { PlayerSelect },
  data() {
    return {
      selectedIds: []
    };
  },
  props: {
    players: Array
  },
  methods: {
    ...mapActions(["addToSquad", "removeFromSquad"]),
    togglePlayer: function(player) {
      if (this.selectedIds.includes(player.id)) {
        this.removeFromSquad(player);
      } else {
        this.addToSquad(player);
      }
    }
  },
  computed: {
    ...mapState({
      squad: state => state.squad.players
    })
  },
  watch: {
    squad: {
      immediate: true,
      handler: function(newSquad) {
        this.selectedIds = newSquad.map(player => player.id);
        if (this.selectedIds.length !== 2) {
          this.$emit("onError");
        } else {
          this.$emit("onErrorSolved");
        }
      }
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
