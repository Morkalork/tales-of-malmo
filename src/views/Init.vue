<template>
  <div class="init">
    <GameSegment :buttons="buttons">
      <loading-icon v-if="players.length === 0" />
      <player-select-list
        v-if="players.length > 0"
        :players="players"
        @onError="onError"
        @onErrorSolved="onErrorSolved"
      />
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
          route: "start", // To be set in our watcher
          isError: false
        }
      ]
    };
  },
  created() {
    this.loadPlayers();
  },
  methods: {
    ...mapActions({
      loadPlayers: "loadPlayers"
    }),
    onError: function() {
      this.buttons[0].title = "Du måste ha exakt två spelare valda";
      this.buttons[0].isError = true;
    },
    onErrorSolved: function() {
      this.buttons[0].title = "Skapa";
      this.buttons[0].isError = false;
    }
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
