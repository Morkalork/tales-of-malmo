<template>
  <div class="game-segment">
    <div class="game-segment--content">
      <slot />
    </div>
    <div class="game-segment--buttons">
      <div v-for="(button, index) in buttons" v-bind:key="index">
        <router-link tag="a" :to="button.route">
          {{ button.title }}
        </router-link>
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
    min-height: calc(85vh - 2rem);
    padding: 1rem 0;
    color: $blue-3;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .game-segment--buttons {
    $button-border: 2px rgba($white, 0.25) solid;

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
        color: $white;
        text-decoration: none;
        user-select: none;
        font-weight: bold;

        &:active {
          color: rgba($white, 0.5);
          -webkit-tap-highlight-color: transparent;
        }
        &:visited {
          color: $white;
        }
      }
    }
  }
}
</style>
