<template>
  <li><slot /></li>
</template>

<script>
export default {
  name: "ListItem"
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
li {
  padding-left: 2rem;
  list-style-type: none;
  &::before {
    font-family: $font-awesome;
    content: "\f1e3";
    margin-left: -1.3rem;
    width: 1.3rem;
    display: inline-block;
    font-size: 0.85rem;
  }
}
</style>
