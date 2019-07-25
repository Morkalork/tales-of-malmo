<template>
  <div class="player-select">
    <div class="player-select--portrait" v-on:click="toggleAttributes">
      <img :src="imageSrc" alt="player.name" />
      <div :class="getAttributeClasses">
        <div>
          <ul>
            <player-select-attribute
              v-for="attribute in attributes"
              :key="attribute.name"
              :name="attribute.name"
              :value="attribute.value"
              :bonuses="player.bonuses"
            />
          </ul>
          <player-select-bonuses :bonuses="player.bonuses" />
        </div>
      </div>
    </div>
    <div class="player-select--information">
      <h3>{{ player.name }}</h3>
      <p>{{ player.position }}, nivå {{ player.level }}</p>
    </div>
  </div>
</template>

<script>
import PlayerSelectAttribute from "./PlayerSelectAttribute";
import PlayerSelectBonuses from "./PlayerSelectBonuses";
export default {
  name: "PlayerSelect",
  components: { PlayerSelectBonuses, PlayerSelectAttribute },
  props: {
    player: Object
  },
  data() {
    return {
      showAttributes: false
    };
  },
  methods: {
    toggleAttributes: function() {
      this.showAttributes = !this.showAttributes;
    }
  },
  computed: {
    imageSrc: function() {
      return `/public/profiles-pictures/${this.player.image}`;
    },
    getAttributeClasses: function() {
      return `player-select--attributes ${this.showAttributes ? "show" : ""}`;
    },
    attributes: function() {
      return Object.keys(this.player.attributes).map(attributeName => ({
        name: attributeName,
        value: this.player.attributes[attributeName]
      }));
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";
.player-select {
  margin: 1rem 0;
  width: 45%;
  img {
    width: 100%;
  }

  .player-select--portrait {
    position: relative;

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

      ul {
        list-style-type: none;
      }
    }
  }
}
</style>
