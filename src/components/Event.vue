<template>
  <div class="event">
    <fight-scene
      v-if="eventType === 'fight'"
      :squad="squad"
      :enemy-level="enemyLevel"
      :associations="associations"
    />
  </div>
</template>

<script>
import FightScene from "./fighting/FightScene";
export default {
  name: "Event",
  components: { FightScene },
  props: {
    eventType: String,
    squad: Array,
    enemyLevel: Number,
    associations: Array
  }
};
</script>

<style scoped></style>
