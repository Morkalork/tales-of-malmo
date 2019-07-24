<template>
  <div class="init">
    <GameSegment :buttons="buttons">
      <loading-icon v-if="characters.length === 0" />
    </GameSegment>
  </div>
</template>

<script>
import GameSegment from "../components/GameSegment";
import LoadingIcon from "../components/LoadingIcon";
import { mapActions, mapState } from "vuex";
export default {
  name: "Init",
  components: { LoadingIcon, GameSegment },
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
    console.log("Loading players!", this);
    this.loadPlayers();
  },
  methods: {
    ...mapActions({
      loadPlayers: "loadPlayers"
    })
  },
  computed: mapState({
    characters: state => state.players.youth
  })
};
</script>

<style lang="scss" scoped>
.init {
  height: 100%;
}
</style>
