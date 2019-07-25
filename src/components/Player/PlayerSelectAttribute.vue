<template>
  <li>
    {{ translatedName }}: {{ value }}
    <span v-if="extraPoints !== 0"
      >({{ extraPoints > 0 ? "+" : "-" }}{{ extraPoints }})</span
    >
  </li>
</template>

<script>
import translateAttributes from "../../helpers/translateAttributes";
import { mapState } from "vuex";

export default {
  name: "PlayerSelectAttribute",
  props: {
    name: String,
    value: Number,
    bonuses: Array
  },
  computed: {
    ...mapState({
      allBonuses: state => state.bonuses.items
    }),
    extraPoints() {
      return this.allBonuses
        .filter(ab => this.bonuses.includes(ab.name))
        .reduce((acc, ab) => {
          const attributes = ab.attributes.filter(attribute =>
            attribute.hasOwnProperty(this.name)
          );
          if (attributes.length > 0) {
            const totalAttributesValue = attributes
              .map(attribute => attribute[this.name])
              .reduce((total, value) => total + value, 0);
            return acc + totalAttributesValue;
          }

          return acc;
        }, 0);
    },
    translatedName() {
      return translateAttributes(this.name);
    }
  }
};
</script>

<style scoped></style>
