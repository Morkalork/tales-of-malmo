<template>
  <div :class="wrapperClasses">
    <p class="icon">
      <i class="fas fa-futbol"></i>
    </p>
    <p>
      <span class="line">{{ line }}</span>
      <span v-if="score" class="attribute-icon">
        <i :class="attributeIconClass"></i>
      </span>
      <span v-if="score" class="score">({{ scoreString }})</span>
    </p>
  </div>
</template>

<script>
import { ATTRIBUTE_ICONS } from "../../constants";

export default {
  name: "FightSequence",
  props: {
    score: Number,
    line: String,
    attribute: String
  },
  computed: {
    scoreString: function() {
      return `${this.score > 0 ? "+" : ""}${this.score}`;
    },
    wrapperClasses: function() {
      const scoreClass =
        this.score > 0 ? "win" : this.score < 0 ? "loss" : "draw";
      return `fight-sequence ${scoreClass}`;
    },
    attributeIconClass: function() {
      return `fas ${ATTRIBUTE_ICONS[this.attribute]}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.fight-sequence {
  display: flex;
  .icon {
    height: 1rem;
    line-height: 1rem;
    margin-right: 1rem;
  }

  .attribute-icon {
    margin: 0 0.5rem;
  }

  .score {
    font-size: 0.85rem;
    font-weight: bold;
    margin-left: 0.25rem;
  }

  &.win {
    .icon {
      color: green;
    }
  }
  &.loss {
    .icon {
      color: red;
    }
  }
}
</style>
