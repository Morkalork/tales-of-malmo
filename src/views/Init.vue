<template>
  <div class="init">
    <GameSegment :buttons="buttons">
      <loading-icon v-if="players.length === 0" />
      <player-select-list v-if="players.length > 0" :players="players" />
    </GameSegment>
  </div>
</template>

<script>
import GameSegment from "../components/GameSegment";
import LoadingIcon from "../components/LoadingIcon";
import { mapActions, mapState } from "vuex";
import PlayerSelectList from "../components/Player/PlayerSelectList";
export default {
  name: "Init",
  components: { PlayerSelectList, LoadingIcon, GameSegment },
  data() {
    return {
      buttons: [
        {
          title: "Skapa",
          route: "play"
        }
      ]
    };
  },
  created() {
    this.loadPlayers();
    this.loadBonuses();
  },
  methods: {
    ...mapActions({
      loadPlayers: "loadPlayers",
      loadBonuses: "loadBonuses"
    })
  },
  computed: mapState({
    players: state => state.players.youth
  })
};
</script>

<style lang="scss" scoped>
.init {
  height: 100%;
}
</style>
