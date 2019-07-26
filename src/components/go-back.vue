<template>
  <a href="#" v-on:click="onClick"
    ><i class="fas fa-arrow-circle-left"></i> Tillbaka
  </a>
</template>

<script>
export default {
  name: "go-back",
  methods: {
    onClick: function(e) {
      e.preventDefault();
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
a {
  color: $white;
  margin: 1rem 0;
  display: block;
}
</style>
