<template>
  <div class="stage">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Stage"
};
</script>

<style lang="scss" scoped>
.stage {
  padding: 1rem;
}
</style>
