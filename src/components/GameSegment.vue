<template>
  <div class="game-segment">
    <div class="game-segment--content">
      <slot />
    </div>
    <div class="game-segment--buttons" v-if="buttons.length > 0">
      <div
        v-for="(button, index) in buttons"
        v-bind:key="index"
        :class="button.isError && 'error'"
      >
        <router-link v-if="button.route" tag="a" :to="button.route">
          {{ button.title }}
        </router-link>
        <a v-if="!button.route" v-on:click="onAction()">{{ button.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameSegment",
  props: {
    title: String,
    stayDown: Boolean, // Should it always scroll down
    buttons: {
      type: Array,
      default: () => []
      /*
      {
        title: "",
        route: "",
        isError: false
      }
       */
    }
  },
  data() {
    return {
      height: 0
    };
  },
  mounted() {
    // TODO: Please, for the love of Rosenberg himself, find a better way to handle "always scroll to bottom"!
    if (this.stayDown) {
      const segment = this.$el;
      setInterval(() => {
        if (segment.clientHeight !== this.height) {
          this.height = segment.clientHeight;
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          });
        }
      }, 500);
    }
  },
  methods: {
    onAction: function() {
      this.$emit("onButtonClick");
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
    min-height: calc(80vh - 2rem);
    padding: 1rem;
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

      &.error {
        a {
          font-style: italic;
          pointer-events: none;

          &::after {
            font-family: "Font Awesome 5 Free", serif;
            content: "\f25b";
          }
        }
      }
    }
  }
}
</style>
