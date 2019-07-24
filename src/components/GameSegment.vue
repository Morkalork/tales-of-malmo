<template>
  <div class="game-segment">
    <div class="game-segment--content">
      <slot />
    </div>
    <div class="game-segment--buttons">
      <div v-for="(button, index) in buttons" v-bind:key="index">
        <a :href="'/' + button.route">{{ button.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameSegment",
  props: {
    title: String,
    buttons: {
      type: Array,
      default: () => ({
        title: "",
        route: ""
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
.game-segment {
  width: 100%;
  min-height: 100%;
  .game-segment--content {
    min-height: 85vh;
    color: $blue-3;
  }

  .game-segment--buttons {
    $button-border: 2px rgba($blue-2, 0.25) solid;

    height: calc(15vh - 2rem);
    padding: 1rem 0;
    margin: 0 1rem;
    display: flex;
    border-top: $button-border;
    > div {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      border-right: $button-border;

      &:last-child {
        border-right: none;
      }

      a {
        color: $blue-3;
        text-decoration: none;
        user-select: none;

        &:active {
          color: rgba($blue-3, 0.5);
          -webkit-tap-highlight-color: transparent;
        }
        &:visited {
          color: $blue-3;
        }
      }
    }
  }
}
</style>
