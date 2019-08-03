<template>
  <div :class="playerClasses">
    <div class="player-select--inner" v-on:click="onSelect">
      <div class="player-select--portrait">
        <p class="player-select--info-icon" v-on:click.stop="toggleAttributes">
          <i :class="getAttributeIconClasses()"></i>
        </p>
        <img :src="imageSrc" alt="player.name" />
        <div :class="getAttributeClasses">
          <div>
            <attributes
              :player-attributes="player.attributes"
              :player-bonuses="player.bonuses"
            />
            <player-select-bonuses :bonuses="player.bonuses" />
          </div>
        </div>
      </div>
      <div class="player-select--information">
        <h3>{{ player.name }}</h3>
        <div class="player-select--information-bottom">
          <p>{{ player.position }}, nivå {{ player.level }}</p>
          <p class="fas fa-check"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerSelectBonuses from "./PlayerSelectBonuses";
import getProfileImage from "../../helpers/getProfileImage";
import Attributes from "../Attributes";
export default {
  name: "PlayerSelect",
  components: { Attributes, PlayerSelectBonuses },
  props: {
    player: Object,
    isSelected: Boolean
  },
  data() {
    return {
      showAttributes: false
    };
  },
  methods: {
    toggleAttributes: function() {
      this.showAttributes = !this.showAttributes;
    },
    onSelect: function() {
      this.$emit("onTogglePlayer");
    },
    getAttributeIconClasses: function() {
      return `fas fa-${this.showAttributes ? "times-circle" : "info-circle"}`;
    }
  },
  computed: {
    imageSrc: function() {
      return getProfileImage(this.player.image);
    },
    getAttributeClasses: function() {
      return `player-select--attributes ${this.showAttributes ? "show" : ""}`;
    },
    playerClasses: function() {
      return `player-select ${this.isSelected && "selected"}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";
.player-select {
  margin: 0.25rem;
  padding: 0.25rem;
  width: calc(50% - 1rem - 8px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: 4px rgba($white, 0.25) dashed;
  border-radius: $border-radius;

  .player-select--inner {
    .player-select--portrait {
      position: relative;
      .player-select--info-icon {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        color: $white;
        font-size: 1.5rem;
        line-height: 1.5rem;
        text-shadow: 0 0 0.5rem #ccc;
        z-index: 999;
      }
      img {
        width: 100%;
      }

      .player-select--attributes {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.75);
        color: $white;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 250ms;
        opacity: 0;

        &.show {
          opacity: 1;
        }
      }
    }
    .player-select--information {
      .player-select--information-bottom {
        display: flex;
        justify-content: space-between;
        p {
          font-size: 0.85rem;
          &.fas {
            opacity: 0.25;
            color: $white;
          }
        }
      }
    }
  }

  &.selected {
    border-color: $white;
    border-style: solid;

    .player-select--information {
      .player-select--information-bottom {
        p {
          &.fas {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
