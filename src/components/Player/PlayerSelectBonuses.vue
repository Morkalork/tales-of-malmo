<template>
  <p class="player-select--bonuses" v-if="bonuses.length > 0">
    (<strong>Bonusar:</strong>&nbsp;<span
      v-for="(bonus, index) in bonuses"
      :key="bonus"
      >{{ bonus }}<span v-if="index < bonuses.length - 1">,&nbsp;</span></span
    >)
  </p>
</template>

<script>
export default {
  name: "PlayerSelectBonuses",
  props: {
    bonuses: Array
  }
};
</script>

<style lang="scss" scoped>
.player-select--bonuses {
  font-size: 0.65rem;
  text-align: left;
}
</style>
