<template>
  <ul>
    <attribute
      v-for="attribute in attributes"
      :key="attribute.name"
      :name="attribute.name"
      :value="attribute.value"
      :bonuses="playerBonuses"
    />
  </ul>
</template>

<script>
import Attribute from "./Attribute";
export default {
  name: "Attributes",
  components: { Attribute },
  props: {
    playerAttributes: Object,
    playerBonuses: Array
  },
  computed: {
    attributes: function() {
      return Object.keys(this.playerAttributes).map(attributeName => ({
        name: attributeName,
        value: this.playerAttributes[attributeName]
      }));
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  li {
    font-size: 0.85rem;
  }
}
</style>
