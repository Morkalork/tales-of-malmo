<template>
  <list-item class="fighter">
    <span>{{ player.name }}</span>
    <div class="fighter--information">
      <div class="fighter--information-portrait">
        <img v-if="!isEnemy" :src="getImageSrc" alt="player.name" />
        <span v-if="isEnemy">
          <i class="fas fa-user-circle"></i>
        </span>
      </div>
      <div class="fighter--information-attributes">
        <ul>
          <attributes
            :player-attributes="player.attributes"
            :player-bonuses="player.bonuses"
          />
        </ul>
      </div>
    </div>
  </list-item>
</template>

<script>
import ListItem from "../ListItem";
import getProfileImage from "../../helpers/getProfileImage";
import Attributes from "../Attributes";
export default {
  name: "fighter",
  props: {
    player: Object,
    isEnemy: Boolean
  },
  methods: {
    getImageSrc: function() {
      return getProfileImage(this.player.image);
    }
  },
  components: { Attributes, ListItem }
};
</script>

<style scoped></style>
